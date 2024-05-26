// Adding student
const db = require("../db");
const bcrypt = require('bcrypt');

const addStudent = async (req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // const { name, email, password } = req.body;
    
    try{
        // Generate a salt and hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const sql = "INSERT INTO student (Name, Email, Password) VALUES (?,?,?)";

        db.query(sql, [name,email,hashedPassword], (err, result) => {
            if (err) {
                console.error('Error adding student:', err);
                return res.status(500).json({ error: "Error adding student" });
            }
            else{
                console.log('Student added successfully:', result);
                return res.status(201).json({ result: "Student added successfully", result });
            }
        });
    }
    catch(err){
        console.error('Error hashing password:', err);
        return res.status(500).json({error:"Error hashing password"});
    }
}
module.exports= {addStudent}











// Adding student
// const db = require("../db")
// const addStudent = (req,res) =>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const sql = "INSERT INTO student (Name, Email, Password) VALUES (?,?,?)";

//     db.query(sql, [name,email,password], (err, result) => {
//         if (err) {
//             console.error('Error adding student:', err);
//             return res.status(500).json({ error: "Error adding student" });
//         }
//         else{
//             return res.status(201).json({ result: "Student added successfully", result });
//         }
//     })
// }
// module.exports= {addStudent}

