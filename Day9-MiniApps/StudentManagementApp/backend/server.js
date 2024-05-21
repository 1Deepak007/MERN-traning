const express = require("express");
const cors = require("cors");
// const mysql = require("mysql2");
const db =require("./db");
const app = express();
const userRoutes = require("./routes/userRoutes.js")
app.use(express.json()); // to parse JSON bodies
app.use(cors());

app.use((req,res,next) =>{
    next();
})

// students routing
app.use("/student",userRoutes);         // userRoutes <- controller  



// Connect to frontend
db.connect((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    app.listen(8081, () => {
        console.log("Server is running on port: 8081");
    });
    console.log(`Connected to database as ID ${connection.threadId}`);
});

