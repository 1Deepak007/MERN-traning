import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { signupSchema } from './utils/validationSchemas';

export default function Signup() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: signupSchema,
        onSubmit: async (values) => {
            console.log(values);
            await axios.post('http://localhost:8181/signup', values)
                .then(res => {
                    console.log(res);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    });

    return (
        <>
            <section style={{ marginTop: '10%' }}>
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    The best offer <br />
                                    <span className="text-primary">for your business</span>
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <h2 className='mb-4 text-decoration-underline'>Register</h2>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label htmlFor="form3Example1" className="form-label">Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="form3Example1"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.username}
                                                />
                                                {formik.touched.username && formik.errors.username ? (
                                                    <div className="error text-danger">{formik.errors.username}</div>
                                                ) : null}
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label htmlFor="form3Example2" className="form-label">Email</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="form3Example2"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div className="error text-danger">{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label htmlFor="form3Example3" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="form3Example3"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                />
                                                {formik.touched.password && formik.errors.password ? (
                                                    <div className="error text-danger">{formik.errors.password}</div>
                                                ) : null}
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                                        </form>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}





{/* ----------------------------------------------------------- */}

// {/* ---------------------------Working Code------------------------------- */}


            {/* working code */}
            {/* <div>
            <div className='container'>
                <h2 className='text-center my-3 text-decoration-underline'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mt-2'>
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={handleInput} className='form-control' name="username" placeholder='username' />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="email">Email</label>
                        <input type="text" onChange={handleInput} className='form-control' name="email" placeholder='email' />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={handleInput} className='form-control' name="password" placeholder='password' />
                    </div>
                    <button type="submit" className='btn btn-primary w-100 rounded-0'>
                        SignUp
                    </button>

                    <div className="row my-3">
                        <div className="col">
                            <b><p>Already have an account? Login here..!</p></b>
                        </div>
                        <div className="col">                
                            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div> */}

{/* ----------------------------------------------------------- */}