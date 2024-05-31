import express from 'express';
import bcrypt from 'bcrypt';
import db from './db.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Please provide username, email, and password" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const values = [username, email, hashedPassword];
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error while inserting data:', err);
                return res.status(500).json({ error: "Error while inserting data" });
            }
            return res.status(201).json({ message: "User registered successfully" });
        });
    } catch (error) {
        console.error('Error while hashing password:', error);
        return res.status(500).json({ error: "Error while processing your request" });
    }
});

// Login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Please provide email and password" });
    }

    const sql = "SELECT * FROM users WHERE email=?";
    db.query(sql, [email], async (err, result) => {
        if (err) {
            console.error('Error while fetching user data:', err);
            return res.status(500).json({ error: "Error while fetching user's data" });
        }
        if (result.length > 0) {
            const user = result[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                req.session.user = { id: user.id, username: user.username, email: user.email };
                return res.json({ login: true, user: req.session.user });
            } else {
                return res.status(401).json({ login: false, error: "Invalid password" });
            }
        } else {
            return res.status(404).json({ login: false, error: "User not found" });
        }
    });
});

// Home route
router.get('/home', (req, res) => {
    if (req.session.user) {
        return res.json({ valid: true, username: req.session.user.username });
    } else {
        return res.status(401).json({ valid: false });
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error while destroying session:', err);
            return res.status(500).json({ error: "Error while destroying session" });
        }
        return res.json({ logout: true });
    });
});

// Add Task
router.post('/addtask', async (req, res) => {
    const { user_id, title, description, duedate, status } = req.body;
    if (!user_id || !title || !description || !duedate || !status) {
        return res.status(400).json({ error: "Please provide user_id, title, description, due date, and status" });
    }
    try {
        const values = [user_id, title, description, duedate, status];
        const sql = "INSERT INTO tasks (user_id, title, description, duedate, status) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error while inserting data:', err);
                return res.status(500).json({ error: 'Error while inserting data' });
            }
            return res.status(200).json({ message: "Task added successfully" });
        });
    } catch (error) {
        console.error('Error while adding task:', error);
        return res.status(500).json({ error: "Error while inserting data." });
    }
});

// Get Tasks for a Specific User
router.get('/gettasks/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const sql = `SELECT tasks.id, tasks.title, tasks.description, tasks.duedate, tasks.status
                    FROM tasks 
                    WHERE tasks.user_id = ?`;
        db.query(sql, [userId], (err, result) => {
            if (err) {
                console.error('Error while fetching tasks:', err);
                return res.status(500).json({ error: "Error while fetching tasks" });
            }
            return res.status(200).json({ tasks: result });
        });
    } catch (error) {
        console.error('Error while fetching tasks:', error);
        return res.status(500).json({ error: "Error while fetching tasks" });
    }
});

export default router;


















// import express from 'express';
// import bcrypt from 'bcrypt';
// import db from './db.js';

// const router = express.Router();

// // Signup route
// router.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;
//     if (!username || !email || !password) {
//         return res.status(400).json({ error: "Please provide username, email, and password" });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const values = [username, email, hashedPassword];
//         const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
//         db.query(sql, values, (err, result) => {
//             if (err) {
//                 console.error('Error while inserting data:', err);
//                 return res.status(500).json({ error: "Error while inserting data" });
//             }
//             return res.status(201).json({ message: "User registered successfully" });
//         });
//     } catch (error) {
//         console.error('Error while hashing password:', error);
//         return res.status(500).json({ error: "Error while processing your request" });
//     }
// });

// // Login route
// router.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ error: "Please provide email and password" });
//     }

//     const sql = "SELECT * FROM users WHERE email=?";
//     db.query(sql, [email], async (err, result) => {
//         if (err) {
//             console.error('Error while fetching user data:', err);
//             return res.status(500).json({ error: "Error while fetching user's data" });
//         }
//         if (result.length > 0) {
//             const user = result[0];
//             const passwordMatch = await bcrypt.compare(password, user.password);
//             if (passwordMatch) {
//                 req.session.user = { id: user.id, username: user.username, email: user.email };
//                 return res.json({ login: true, user: req.session.user });
//             } else {
//                 return res.status(401).json({ login: false, error: "Invalid password" });
//             }
//         } else {
//             return res.status(404).json({ login: false, error: "User not found" });
//         }
//     });
// });

// // Home route
// router.get('/home', (req, res) => {
//     if (req.session.user) {
//         return res.json({ valid: true, username: req.session.user.username });
//     } else {
//         return res.status(401).json({ valid: false });
//     }
// });

// // Logout route
// router.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.error('Error while destroying session:', err);
//             return res.status(500).json({ error: "Error while destroying session" });
//         }
//         return res.json({ logout: true });
//     });
// });

// // Add Task
// router.post('/addtask', async (req, res) => {
//     console.log('add task called');
//     const { taskid, title, description, duedate, status } = req.body;
//     if (!title || !description || !duedate || !status) {
//         return res.status(400).json({ error: "Please provide task id, title, description, date, and status" });
//     }
//     try {
//         const values = [taskid, title, description, duedate, status];
//         const sql = "INSERT INTO tasks (taskid, title, description, duedate, status) VALUES (?, ?, ?, ?, ?)";
//         db.query(sql, values, (err, result) => {
//             if (err) {
//                 console.error('Error while inserting data:', err);
//                 return res.status(500).json({ error: 'Error while inserting data' });
//             }
//             return res.status(200).json({ message: "Task Added Successfully" });
//         });
//     } catch (error) {
//         console.log('Error while adding task', error);
//         return res.status(500).json({ error: "Error while inserting data." });
//     }
// });

// // Get Tasks for a Specific User
// router.get('/gettasks/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const sql = `SELECT tasks.id, tasks.title, tasks.description, tasks.duedate, tasks.status
//                     FROM tasks 
//                     WHERE tasks.user_id = ?`;
//         db.query(sql, [userId], async (err, result) => {
//             if (err) {
//                 console.error('Error while fetching tasks:', err);
//                 return res.status(500).json({ error: "Error while fetching tasks" });
//             }
//             return res.status(200).json({ tasks: result });
//         });
//     } catch (error) {
//         console.error('Error while fetching tasks:', error);
//         return res.status(500).json({ error: "Error while fetching tasks" });
//     }
// });

// export default router;