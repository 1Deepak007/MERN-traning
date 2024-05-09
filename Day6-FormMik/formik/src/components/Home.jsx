import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas'

// Formik : is used for form handling (getting form data)
// Yup : is used for form validation


const Home = () => {
    // destructuring values of Formik   -Formik.values.name
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
            alert(`Name : ${values.name}, Email:${values.email}, Password:${values.password} `);
        }
    });
    console.log(errors);

    // console.log(Formik);


    return (
        <div className='container'>
            <h2 className='text-center my-3 text-decoration-underline'>Formik</h2>
            <div className='m-5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} aria-describedby="uname" />
                        {/* <div id="uname" className="form-text">We'll never share your email with anyone else.</div> */}
                        {
                            errors.name && touched.name ? (
                                <p className='errorwarning' style={{ color: 'red' }}>{errors.name}</p>
                            ) : null
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        {
                            errors.email && touched.email ? (
                                <p className='errorwarning' style={{ color: 'red' }}>{errors.email}</p>
                            ) : null
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {
                            errors.password && touched.password ? (
                                <p className='errorwarning' style={{ color: 'red' }}>{errors.password}</p>
                            ) : null
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmpassword" id="confirmpassword" value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} />
                        {
                            errors.confirmpassword && touched.confirmpassword ? (
                                <p className='errorwarning' style={{ color: 'red' }}>{errors.confirmpassword}</p>
                            ) : null
                        }
                    </div>
                    {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Home;