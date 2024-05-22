// Adding student
const db = require("../db")
const addStudent = (req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const sql = "INSERT INTO student (Name, Email, Password) VALUES (?,?,?)";

    db.query(sql, [name,email,password], (err, result) => {
        if (err) {
            console.error('Error adding student:', err);
            return res.status(500).json({ error: "Error adding student" });
        }
        else{
            return res.status(201).json({ result: "Student added successfully", result });
        }
    })
}
module.exports= {addStudent}