const db = require("../db");

const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;       // req.body for taking data from form

    const sql = "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";

    db.query(sql, [name, email, id], (err, result) => {
        if (err) {
            console.error('Error updating student:', err);
            return res.status(500).json({ error: "Error updating student" });
        }
        res.status(200).json({ message: "Student updated successfully" });
    });
};

module.exports = { updateStudent };





























// const db = require("../db")

// const updateStudent = () => {
//     const name = req.body.name
//     const email =  req.body.email
    
//     const sql = "UPDATE student (Name,Email) where VALUES (?,?)";

//     db.query(sql, [name,email], (err,result) => {
//         if(err){
//             console.log('Error updating student ',err);
//             return res.json(err);
//         }
//         else{
//             console.log('Student updated successfully');
//         }
//     })


// }

// module.exports = {updateStudent}



