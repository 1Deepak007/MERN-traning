const db = require("../db");


const deleteStudent=(req, res)=>{
    const { id }= req.params;        // req.params for taking data from url

    const sql = 'DELETE FROM student WHERE ID=?'

    console.log("Delete : ",id);

    db.query(sql,[id],(err,data) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).json("Error");
        }
        return res.json('Data deleted successfully');
    })
} 

module.exports = {deleteStudent};
