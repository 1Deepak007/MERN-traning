import express from 'express';
import bcrypt from 'bcrypt';
import mysql from 'mysql2';
import db from './db.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    // Validate input
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

// Home route
router.get('/', (req, res) => {
    // check if user is logged-in then user shoud go to home and disply the name
    if (req.session.user) {
        return res.json({ valid: true, username: req.session.user })
    }
    else {
        return res.json({ valid: false })
    }
});

// Login route
router.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email=?";
    db.query(sql, [req.body.email], async (err, result) => {
        if (err) return res.json({ Message: "Error while fetching user's data" });
        if (result.length > 0) {
            const user = result[0];
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (passwordMatch) {
                req.session.username = user.username; // setting session
                req.session.user = { id: user.id, username: user.username, email: user.email }; // store user data in session// Save the user data in the session
                // console.log('user : ', user);
                return res.json({ Login: true, user: req.session.user });
            } else {
                return res.json({ Login: false });
            }
        } else {
            return res.json({ Login: false });
        }
    });
});

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy();
    return res.json({ logout: true });
});

// Get user route
router.get('/getuser/:id', (req, res) => {
    const userId = req.params.id;
    const sql = `
        SELECT u.id, u.username, u.email, d.hobbie, d.age, d.gender, d.profession
        FROM users u
        LEFT JOIN userdetails d ON u.id = d.id
        WHERE u.id = ?
    `;
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error('Error while fetching user data:', err);
            return res.status(500).json({ message: "Error while fetching user's data" });
        }
        if (result.length > 0) {
            return res.json({ user: result[0] });
        } else {
            return res.json({ user: null });
        }
    });
});

// Update user route
router.post('/updateuser/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email, hobbie, age, gender, profession } = req.body;

    const updateUserSql = `
        UPDATE users SET username = ?, email = ? WHERE id = ?
    `;
    const updateUserValues = [username, email, userId];

    const updateUserDetailsSql = `
        INSERT INTO userdetails (id, hobbie, age, gender, profession) VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE hobbie = VALUES(hobbie), age = VALUES(age), gender = VALUES(gender), profession = VALUES(profession)
    `;
    const updateUserDetailsValues = [userId, hobbie, age, gender, profession];

    db.query(updateUserSql, updateUserValues, (err, result) => {
        if (err) {
            console.error('Error while updating user:', err);
            return res.status(500).json({ message: "Error while updating user" });
        }

        db.query(updateUserDetailsSql, updateUserDetailsValues, (err, result) => {
            if (err) {
                console.error('Error while updating user details:', err);
                return res.status(500).json({ message: "Error while updating user details" });
            }

            return res.json({ message: "User updated successfully" });
        });
    });
});

export default router;
