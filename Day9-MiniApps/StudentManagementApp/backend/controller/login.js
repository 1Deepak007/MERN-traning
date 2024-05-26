const bcrypt = require("bcrypt");
const db = require("../db");

const loginStudent = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log('Form : ', email, '  ', password);

    // Query to get the user data by email
    const sql = "SELECT * FROM student WHERE `Email` = ?";

    db.query(sql, [email], async (err, data) => {
        console.log('Database : ', data);

        if (err) {
            return res.status(500).json({ success: false, message: "Database error", error: err });
        }
        if (data.length > 0) {
            const user = data[0];
            const storedHashedPassword = user.Password;

            // Compare the provided password with the stored hashed password
            const isMatch = await bcrypt.compare(password, storedHashedPassword);

            if (isMatch) {
                // Store user information in session
                req.session.user = { id: user.id, email: user.Email };
                return res.json({ success: true, message: "Login successful" });
            } else {
                return res.json({ success: false, message: "Invalid credentials" });
            }
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }
    });
};


module.exports = { loginStudent };
