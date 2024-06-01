import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/buttons.css';
import InputField from './subcomponent/InputField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import validationSchema from '../utils/validationSchema';

const SignupLogin = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8182/home')
    .then((response) => {
      if(response.data.valid){
        navigate('/home')
        setIsLoggedIn(true);
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  },[navigate]);
  
  if(isLoggedIn){
    return null;     // render nothing of already loggedin
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
          Swal.fire({
            title: 'Error!',
            text: res.data.error || 'Invalid credentials',
            icon: 'error',
            confirmButtonText: 'Try Again!'
          });
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Try Again!'
      });
    } finally {
      setSubmitting(false);
    }
  };

  


  return (
    <div className="auth-form container mt-5" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
      <div className="row">
        <div className="col">
          <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        </div>
        <div className="col mt-3 bg-black text-light border-4 rounded-5 pt-2" style={{ marginLeft: '30%', boxShadow: '3px 3px lime' }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={handleSwitch} style={{ cursor: 'pointer', color: 'blue' }}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </div>
      </div>

      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema(isSignup)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            {isSignup && (
              <Row>
                <Col>
                  <InputField name="username" placeholder="Enter Name" type="text" />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </Col>
              </Row>
            )}

            <Row>
              <Col>
                <InputField name="email" placeholder="Enter Email" type="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </Col>
            </Row>

            <Row>
              <Col>
                <InputField name="password" placeholder="Enter Password" type="password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </Col>
            </Row>

            <button type="submit" className="btnStyl1 my-2 text-center" disabled={isSubmitting}>
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default SignupLogin;