const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const userRoutes = require("./routes/userRoutes.js")
app.use(express.json()); // to parse JSON bodies
app.use(cors());

// Configure session middleware
// app.use(session({
//     secret: 'thisismysecretkeyJamesBond007',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure:false}
// }))

// Middleware to handle sessions
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
