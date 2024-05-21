const express = require('express'); 

const {displayStudents} = require('../controller/display'); 
const {displayStudentbyid} = require('../controller/display');
const {addStudent} = require("../controller/add"); 
const {updateStudent} = require("../controller/update");

const router = express.Router(); 

router.get('/get-students',displayStudents);

router.get('/get-students/:id',displayStudentbyid);

router.post('/add-student',addStudent);

router.post('/update-student/:id',updateStudent);

module.exports = router
