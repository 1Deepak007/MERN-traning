import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(5)
});

export const signupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(3),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{5,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
});
