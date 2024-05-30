import * as Yup from 'yup';

const validationSchema = (isSignup) => {
  return Yup.object().shape({
    username: isSignup ? Yup.string().required('Username is required') : Yup.string(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  });
};

export default validationSchema;
