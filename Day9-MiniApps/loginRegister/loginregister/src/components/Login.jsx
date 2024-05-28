import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from './utils/validationSchemas';
import Alert from 'react-bootstrap/Alert';
import './styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8181')
      .then(res => {
        if (res.data.valid) {
          navigate('/');
        } else {
          navigate('/login');
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // console.log(values);
      axios.post('http://localhost:8181/login', values)
        .then(res => {
          if (res.data.Login) {
            setAlert({ show: true, variant: 'success', message: 'Login successful!' });
            navigate('/');
           
          } else {
            setAlert({ show: true, variant: 'danger', message: 'Email or password wrong!' });
          }
        })
        .catch(err => {
          console.log(err);
          setAlert({ show: true, variant: 'danger', message: 'An error occurred. Please try again.' });
        });
    }
  });
    // console.log(formik);

      
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <h2 className="text-center mb-4 text-decoration-underline">Login</h2>
              {alert.show && (
                <Alert variant={alert.variant} onClose={() => setAlert({ show: false, variant: '', message: '' })} dismissible>
                  {alert.message}
                </Alert>
              )}
              <form onSubmit={formik.handleSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                  <label htmlFor="form3Example3" className="form-label">Email address</label>
                  <input
                    type="text"
                    name="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div data-mdb-input-init className="form-outline mb-3">
                  <label htmlFor="form3Example4" className="form-label">Password</label>
                  <input type="password" name="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg form-control" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup">Register</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

















// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import { loginSchema } from './utils/validationSchemas';
// import './styles/login.css';

// export default function Login() {
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     axios.get('http://localhost:8181')
//       .then(res => {
//         if (res.data.valid) {
//           navigate('/');
//         } else {
//           navigate('/login');
//         }
//         console.log(res);
//       })
//       .catch(err => console.log(err));
//   }, [navigate]);

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: ''
//     },
//     validationSchema: loginSchema,
//     onSubmit: (values) => {
//       axios.post('http://localhost:8181/login', values)
//         .then(res => {
//           if (res.data.Login) {
//             navigate('/');
//             console.log(res);
//           } else {
//             alert('Email or password wrong!');
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   });

//   return (
//     <>
//       <section className="vh-100">
//         <div className="container-fluid h-custom">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-md-9 col-lg-6 col-xl-5">
//               <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
//             </div>
//             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//               <h2 className="text-center mb-4 text-decoration-underline">Login</h2>
//               <form onSubmit={formik.handleSubmit}>
//                 <div data-mdb-input-init className="form-outline mb-4">
//                   <label htmlFor="form3Example3" className="form-label">Email address</label>
//                   <input
//                     type="text"
//                     name="email"
//                     id="form3Example3"
//                     className="form-control form-control-lg"
//                     placeholder="Enter email address"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                   />
//                   {formik.touched.email && formik.errors.email ? (
//                     <div className="error text-danger">{formik.errors.email}</div>
//                   ) : null}
//                 </div>
//                 <div data-mdb-input-init className="form-outline mb-3">
//                   <label htmlFor="form3Example4" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="form3Example4"
//                     className="form-control form-control-lg"
//                     placeholder="Enter password"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.password}
//                   />
//                   {formik.touched.password && formik.errors.password ? (
//                     <div className="error text-danger">{formik.errors.password}</div>
//                   ) : null}
//                 </div>
//                 <div className="text-center text-lg-start mt-4 pt-2">
//                   <button type="submit" className="btn btn-primary btn-lg form-control" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
//                   <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup">Register</Link></p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
