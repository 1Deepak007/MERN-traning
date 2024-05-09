// // Here we are creating nodejs backend server using express framework

const express =  require('express');
const app = express()
const cors = require("cors")
const mysql = require("mysql2")
const port = process.env.port  || 4400


app.use(express.json())
app.use(cors())

app.listen(port,(err) => [
    console.log(`server is running on port ${port}`)
]);

// -----------------------------------------------------------
// //=================> CRUD functionality <==================

// create DB connection
const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'productmaster',
    port:3306
})

// connect to frontend
pool.getConnection((err,connection) => {
    if(err) throw err
    console.log(`connected as id ${connection.threadId}`)
    console.log('Connection to database successfull')
    connection.release();
})



// --------------------------------------------------------------------------------------------------------
// const express = require("express");
// const app = express();
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
// const cors = require("cors"); // cors basically use to access our backend api in react frontend side

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "productmaster"
// })


// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/get", (req, res) => {
//     const sqlGet = "select * from contact where 1";

//     db.query(sqlGet, (err, result) => {
//         console.log("error", err);
//         console.log("result", result);

//         res.send(result);
//     })
// })

// app.post("/api/post", (req, res) => {
//     const { name, email, contact } = req.body;

//     const sqlInsert = "insert into contact(name,email,contact) values(?, ?, ?)";
//     db.query(sqlInsert, [name, email, contact], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// })
// --------------------------------------------------------------------------------------------------------



// creating get-api 


app.get('/products', (req, res) => {       
    const sql = 'SELECT * FROM product';
    pool.query(sql, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})                                      // testing get thunderclient -> http://localhost:4400/products/117 

// creating post-api
app.post('/products', (req, res) => {
    const sqlIns = 'INSERT INTO product(name,category,brand) VALUES(?)';
    const values = [req.body.name, req.body.category, req.body.brand]

    console.log(values);
    pool.query(sqlIns,[values],(err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})                                          // testing insert -> http://localhost:4400/products      JSON e.g ->  { "name": "Realme 8s", "category": "Smartphone", "brand": "Realme"}

// creating patch/update-api  
app.patch('/products/:productId', (req, res) => {
    const prodId = Number(req.body.productId)
    const sql = 'UPDATE product SET `name`=?,`category`=?,`brand`=? WHERE productId=?';
    // const values = [req.body.name,req.body.category,req.body.brand]
    pool.query(sql, [req.body.name, req.body.category, req.body.brand, prodId], (err, result) => {
        if (err) return res.json(err) 
        return res.json(result)
    })
})                                          // test patch/update -> http://localhost:4400/products/116     JSON e.g -> { "productId":116 ,"name": "ZenBook", "category": "Laptop", "brand": "Asus"}

// creating delete-api  
app.delete('/products/:productId', (req, res) => {
    const prodId = Number(req.params.productId)
    const sql = 'DELETE FROM product WHERE productId=?';
    // const values = [req.body.name,req.body.category,req.body.brand]
    pool.query(sql, prodId, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})                                                // testing delete -> http://localhost:4400/products/117        -> 117 is id to be deleted


// //---------------------------------------------------------------------------------
// // const port = 5000;
// // app.listen(port,(err) => [
// //     console.log(`server is running on port ${port}`)
// // ]);