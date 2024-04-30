import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// SweetAlert
import Swal from 'sweetalert2'

export default function Login() {

  const [regUseremail, setregUseremail] = useState('');
  const [regPassword, setregPassword] = useState('');
  const [regConfPassword, setregConfPassword] = useState('');
  const [regConfCheck, setregConfCheck] = useState(false);
  // const [users,setUsers] = useState([]);
  const users = [];

  const handleRegister = (e) => {
    e.preventDefault();
    if (regUseremail === '' || null) {
      Swal.fire({ position: "top-end", icon: "error", title: "Email can't be blank", showConfirmButton: false, timer: 1500 });
    }
    else if (regPassword === '' || null) {
      Swal.fire({ position: "top-end", icon: "error", title: "Password can't be blank", showConfirmButton: false, timer: 1500 });
    }
    else if (regConfPassword === '' || null) {
      Swal.fire({ position: "top-end", icon: "error", title: "Confirm Password can't be blank", showConfirmButton: false, timer: 1500 });
    }
    else if (regConfCheck === false) {
      Swal.fire({ position: "top-end", icon: "error", title: "Confirmation checkbox can't be unchecked", showConfirmButton: false, timer: 1500 });
    }
    else {
      users.email = regUseremail;
      users.password = regPassword;
      // users.push({ email: regUseremail, password: regPassword });
      // console.log(users);
      let newObj = { email: regUseremail, password: regPassword }
      let addingUser = [...users,newObj]
      
      console.log(addingUser);
      // alert('Registration Successfull');
      Swal.fire({ position: "top-end", icon: "success", title: "Registration successfull", showConfirmButton: false, timer: 1500 });
    }
  }

  // const username = 'ds095536@gmail.com'; const password = 'Deepak123';
  const [userEmail, setuserEmail] = useState('');
  const [passWord, setpassWord] = useState('');
  const [confirm, setConfirm] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    // if (userEmail === username && passWord === password && confirm === 'on') {
    if (userEmail in users && passWord in users && confirm === 'on') {
      console.log(userEmail, passWord, confirm);
      // alert('Login Successful');
      Swal.fire({
        title: 'Success',
        text: 'Login Successfull',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      console.log(users);
    } else {
      console.log(userEmail, passWord, confirm);
      Swal.fire({
        title: 'Error!',
        text: 'Login Failed',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      // console.log('Login Failed');
      console.log(users);
    }


    console.log(users);
  }









  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col p-5">
          <h2>Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e) => setuserEmail(e.target.value)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setpassWord(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check onChange={(e) => setConfirm(e.target.value)} type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </div>


        <div className="col p-5 ">
          <h2>Register</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setregUseremail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setregPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setregConfPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
              <Form.Check type="checkbox" label="Check me out" checked={regConfCheck} onChange={(e) => setregConfCheck(e.target.checked)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegister}>
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
