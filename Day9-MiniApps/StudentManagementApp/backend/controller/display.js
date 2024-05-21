const db = require("../db")

const  displayStudents = (req,res) =>{
    // console.log("hi");
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
}

const displayStudentbyid = (req,res) =>{
    console.log("hi");
    const { id } = req.params;
    console.log('id is :',id);
    const sql = "SELECT * FROM student WHERE id = ?";
    db.query(sql,[id],(err, data) => {
        console.log('hlo');
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
        console.log('data : ',data);
    });
}
module.exports= {displayStudents,displayStudentbyid}