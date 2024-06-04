import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import '../styles/buttons.css';
import InputField from './subcomponent/InputField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Formik, Form as FormikForm, ErrorMessage } from 'formik';
import validationSchema from '../utils/validationSchema';
import '../styles/fontStyles.css';
import '../styles/SignupLogin.css';

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
    <Container className="auth-form mt-40 p-4 shadow rounded text-center" style={{ maxWidth: '500px' }}>
      <Row className="mb-3">
        <Col>
          <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} className="bg-dark text-light rounded p-3">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={handleSwitch} style={{ cursor: 'pointer', color: 'blue', marginLeft: '10px' }}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </Col>
      </Row>

      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema(isSignup)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            {isSignup && (
              <Row className="mb-3">
                <Col xs={12}>
                  <InputField name="username" placeholder="Enter Name" type="text" />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </Col>
              </Row>
            )}

            <Row className="mb-3">
              <Col xs={12}>
                <InputField name="email" placeholder="Enter Email" type="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12}>
                <InputField name="password" placeholder="Enter Password" type="password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <button type="submit" className="btnStyl1" disabled={isSubmitting}>
                  {isSignup ? 'Sign Up' : 'Login'}
                </button>
              </Col>
            </Row>
          </FormikForm>
        )}
      </Formik>
    </Container>
  );
};

export default SignupLogin;
