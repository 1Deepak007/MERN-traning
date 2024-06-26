const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'userdataformik',
  port: 3306
});

// Connect to database
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log(`Connected to database as id ${connection.threadId}`);
  connection.release();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// CRUD functionality

// Get all users
app.get('/allusers', (req, res) => {
  const sqlGet = "SELECT * FROM users";
  pool.query(sqlGet, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
  });
});

// Get user by id
app.get('/getuser/:id', (req, res) => {
  const uid = Number(req.params.id);
  const sqlGetUsr = "SELECT * FROM users WHERE id = ?";
  pool.query(sqlGetUsr, uid, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
  });
});

// Add user
app.post('/adduser', (req, res) => {
  const sqlIns = "INSERT INTO users(name, age, gender, phone, email, city, state, country, address) VALUES (?)";
  const values = [req.body.name, req.body.age, req.body.gender, req.body.phone, req.body.email, req.body.city, req.body.state, req.body.country, req.body.address];
  
  pool.query(sqlIns, [values], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
  });
});

// Delete user
app.delete('/deleteuser/:id', (req, res) => {
  const userId = Number(req.params.id);
  const qry = 'DELETE FROM users WHERE id=?';
  
  pool.query(qry, userId, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
  });
});

// Update user
app.put('/updateuser/:id', (req, res) => {
  const userId = Number(req.params.id);
  const { name, age, gender, phone, email, city, state, country, address } = req.body;
  const qry = 'UPDATE users SET name=?, age=?, gender=?, phone=?, email=?, city=?, state=?, country=?, address=? WHERE id=?';

  pool.query(qry, [name, age, gender, phone, email, city, state, country, address, userId], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      return res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
    return res.json({ success: true, message: 'User updated successfully.', result });
  });
});
