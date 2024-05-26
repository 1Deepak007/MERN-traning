const logoutStudent = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Error logging out" });
        }
        res.clearCookie('connect.sid'); // Default cookie name for express-session
        return res.json({ success: true, message: "Logout successful" });
    });
};

module.exports = { logoutStudent };
