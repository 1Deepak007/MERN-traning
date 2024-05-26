import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: (values) => {
            axios.post('http://localhost:8081/student/login-student', values)
                .then(response => {
                    const data = response.data;
                    if (data.success) {
                        localStorage.setItem("User's Email", values.email);
                        alert('Login successful');
                        navigate('/home');
                    } else {
                        alert('Invalid credentials');
                    }
                })
                .catch(error => {
                    console.error('There was an error logging In. Error:', error);
                });
        },
    });

    const handleLogout=()=>{
        axios.post('http://localhost:8081/student/logout-student')
        .then(response => {
            const data = response.data;
            if(data.success){
                localStorage.removeItem("User's Email");
                alert("Logout successfull")
                navigate('/login')
            }
            else{
                alert("Logout failed")
            }
        })
        .catch(error => {
            console.error('There was an error logging In. Error:', error);
        })
    }

    return (
        <div className='' style={{ fontFamily: 'cursive' }}>
            <div style={{ marginLeft: '40%', marginRight: '30%', marginTop: '10%' }}>
                <h3>Login</h3>
                <form onSubmit={formik.handleSubmit} className='mb-3'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ paddingRight: '10%' }}>Email</span>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="xyz@gmail.com"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <span className='text-danger'>{formik.errors.email}</span>
                        ) : null}
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="your password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <span className='text-danger'>{formik.errors.password}</span>
                        ) : null}
                    </div>
                    <button className='btn btn-success' type="submit">Login</button>
                    
                </form>
                Don't have account? Create here...<Link to='/create'>Register</Link>
                
                <br />

                <button onClick={handleLogout} className='btn btn-danger mt-2'>Logout</button>
            </div>
        </div>
    );
}