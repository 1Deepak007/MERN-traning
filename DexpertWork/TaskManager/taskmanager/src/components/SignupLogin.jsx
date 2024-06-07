import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/buttons.css';
import InputField from './subcomponent/InputField';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import validationSchema from '../utils/validationSchema';
import '../styles/fontStyles.css';
import '../styles/SignupLogin.css';

import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';

const SignupLogin = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8182/home')
      .then((response) => {
        if (response.data.valid) {
          navigate('/home');
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  if (isLoggedIn) {
    return null; // render nothing if already logged in
  }

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const url = isSignup ? 'http://localhost:8182/signup' : 'http://localhost:8182/login';
      const res = await axios.post(url, values);
      console.log(res.data);

      if (isSignup) {
        navigate('/home');
      } else {
        if (res.data.login) {
          navigate('/home');
        } else {
          // Swal.fire({
          //   title: 'Error!',
          //   text: res.data.error || 'Invalid credentials',
          //   icon: 'error',
          //   confirmButtonText: 'Try Again!'
          // });
          toast.error('Wrong Email or Password');
        }
      }
    } catch (err) {
      console.error(err);
      // Swal.fire({
      //   title: 'Error!',
      //   text: 'An error occurred. Please try again later.',
      //   icon: 'error',
      //   confirmButtonText: 'Try Again!'
      // });
      toast.error('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <div 
    // style={{'background':'url("https://images.alphacoders.com/135/1350899.png") no-repeat'}}
    >
      <Container className="wrapper p-4 shadow rounded text-center" 
      style={{ maxWidth: '400px', marginTop: '10%' }}
      >
        <Formik initialValues={{ username: '', email: '', password: '' }}
          validationSchema={validationSchema(isSignup)} onSubmit={handleSubmit} >

          {({ isSubmitting }) => (
            <FormikForm>
              <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>

              {isSignup && (
                <div className="input-box">
                  <InputField name="username" placeholder="Username" type="text" required />
                  <i className='bx bxs-user'></i>
                  <ErrorMessage name="username" component="div" className="text-success" />
                </div>
              )}

              <div className="input-box">
                <InputField name="email" placeholder="Enter Email" type="email" required />
                <i className='bx bxs-envelope'></i>
                <ErrorMessage name="email" component="div" className="text-success" />
              </div>

              <div className="input-box">
                <InputField className="m-4" name="password" placeholder="Password" type="password" required />
                <i className='bx bxs-lock-alt'></i>

                <ErrorMessage name="password" component="div" className="text-success" />
              </div>



              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSignup ? 'Sign Up' : 'Login'}
              </button>

              <div className="register-link">
                <p>
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}
                  <Link onClick={handleSwitch} style={{ cursor: 'pointer', marginLeft: '5px' }}>
                    {isSignup ? 'Log In' : 'Register'}
                  </Link>
                </p>
              </div>
            </FormikForm>
          )}
        </Formik>

      </Container>
      <ToastContainer />
    </div>
    </>
  );
};

export default SignupLogin;
















//     <div class="wrapper">
//       <form action="">
//         <h1>Login</h1>
//         <div class="input-box">
//           <input type="text" placeholder="Username" required />
//           <i class='bx bxs-user'></i>
//         </div>
//         <div class="input-box">
//           <input type="password" placeholder="Password" required />
//           <i class='bx bxs-lock-alt'></i>
//         </div>
//         <div class="remember-forgot">
//           <label>
//             <input type="checkbox"/>
//             Remember me
//           </label>
//           <a href="#"> Forgot Password?</a>
//         </div>
//         <button type="submit" class="btn">Login</button>
//         <div class="register-link">
//           <p>Don't have an account? <a href="#">Register</a></p>
//         </div>
//       </form>
//     </div>