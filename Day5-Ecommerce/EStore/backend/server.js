const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const  connection  = require("./config/db.js");
const ProductRoutes = require("./routes/ProductRoutes.js");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", ProductRoutes);
// app.use("/api/user", UserRoutes);

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.log("Error in Connecting DB");
        process.exit(1);
    }
    console.log("Connection done with DB");
    const server = app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    });
});

// Handle database connection errors
connection.on("error", (err) => {
    console.log("Error in Connecting DB", err);
    process.exit(1);
});

module.exports = app;











// import { dbConfig } from './db';

// // Set up database connection
// const mysql = require('mysql2');
// const connection = mysql.createConnection(dbConfig);

// // Set up routing
// const express = require('express');
// const app = express();

// // Define routes
// const productRoutes = require('./Routes/ProductRoutes');
// app.use('/api/products', productRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });
