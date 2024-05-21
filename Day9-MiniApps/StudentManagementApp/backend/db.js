const mysql = require('mysql2')
const db = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentscrud',
    port: 3306
});

module.exports = db;