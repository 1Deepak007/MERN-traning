import React, { useEffect, useState } from 'react';
import InputField from './subcomponent/InputField';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import validationSchema from '../utils/validationSchema';
import '../styles/buttons.css';
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
          toast.error('Wrong Email or Password');
        }
      }
    } catch (err) {
      console.error(err);
      toast.error('Email or password incorrect. Please try correct one again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className='body-bg'>
        <div className=''>
          <div className="flex h-screen justify-center items-center">
            <Formik initialValues={{ username: '', email: '', password: '' }} validationSchema={validationSchema(isSignup)} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <FormikForm className='bg-white py-4 px-10 rounded-2xl'>
                  <h1 className='mb-3'>{isSignup ? 'Sign Up' : 'Login'}</h1>

                  {isSignup && (
                    <div className="input-box mt-2">
                      <InputField name="username" placeholder="Username" type="text" required />
                      <i className='bx bxs-user'></i>
                      <ErrorMessage name="username" component="div" className="text-danger" />
                    </div>
                  )}

                  <div className="input-box mt-2">
                    <InputField className="border-4" name="email" placeholder="Enter Email" type="email" required />
                    <i className='bx bxs-envelope'></i>
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="input-box mt-2">
                    <InputField className="m-4" name="password" placeholder="Password" type="password" required />
                    <i className='bx bxs-lock-alt'></i>
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <button type="submit" className="btnStyl3 mt-4" disabled={isSubmitting}>
                    {isSignup ? 'Sign Up' : 'Login'}
                  </button>

                  <div className="register-link mt-3">
                    <p>
                      {isSignup ? 'Already have an account?' : "Don't have an account?"}
                      <Link onClick={handleSwitch} className='cursor-pointer ml-3 text-white no-underline bg-black rounded-md p-1'>
                        {isSignup ? 'LogIn' : 'Register'}
                      </Link>
                    </p>
                  </div>
                </FormikForm>
              )}
            </Formik>

          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default SignupLogin;
