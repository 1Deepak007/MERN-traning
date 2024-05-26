const express = require('express');

const { displayStudents } = require('../controller/display');
const { displayStudentbyid } = require('../controller/display');
const { addStudent } = require("../controller/add");
const { updateStudent } = require("../controller/update");
const { deleteStudent } = require("../controller/delete");
const { loginStudent } = require("../controller/login");
const { logoutStudent } = require('../controller/logout');

const router = express.Router();

router.get('/get-students', displayStudents);
router.get('/get-students/:id', displayStudentbyid);
router.post('/add-student', addStudent);
router.put('/update-student/:id', updateStudent);
router.delete('/del-students/:id', deleteStudent);
router.post('/login-student', loginStudent);
router.post('/logout-student', logoutStudent);




module.exports = router;