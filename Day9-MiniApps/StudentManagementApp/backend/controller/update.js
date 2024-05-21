const db = require("../db")

// const updateStudent = ('/update/:id',(req, res) => {
//     const sql = "update student SET `Name` = ?, `Email` = ? WHERE ID = ?";

//     const values = [
//         req.body.name,
//         req.body.email
//     ]

//     const id  = req.params.id;

//     db.query(sql, [...values,id], (err,data)=>{
//         if(err) return res.json("Error while updating");
//         return res.json(data);
//     })


//     // const id  = req.params.id;
//     // const response = req.body;

//     // console.log( req.body);
    

    
//     // db.query(sql, [Name, Email, id], (err, result) => {
//     //     if (err) {
//     //         console.error('Error updating student:', err);
//     //         return res.status(500).json({ error: "Error updating student" });
//     //     }
//     //     res.status(200).json({ message: "Student updated successfully" });
//     // });
// })







const updateStudent = () => {
    app.put('/update/:id',(req,res)=>{
        console.log('update js called')
        const sql = "update student set `Name`=?, `Email`=? where ID=?";
        const values = [
            req.body.name,
            req.body.email
        ]
        const id = req.params.id;
    
        db.query(sql, [...values,id], (err,data) => {
            if(err) return res.jsoon("Error");
            return res.json(data);
        })
    })
}

module.exports = {updateStudent}



// app.put('/update/:id',(req,res)=>{
//     const sql = "update student set `Name`=?, `Email`=? where ID=?";
//     const values = [
//         req.body.name,
//         req.body.email
//     ]
//     const id = req.params.id;

//     db.query(sql, [...values,id], (err,data) => {
//         if(err) return res.jsoon("Error");
//         return res.json(data);
//     })
// })

// module.exports = {updateStudent}