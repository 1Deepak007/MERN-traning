// import React from 'react'
// import { useFormik } from 'formik';
// import  { useState, useEffect } from 'react';
// import { formSchema } from './Myformik'
// import axios from 'axios';
// import InputField from './MyForm';

// const initialValues = {
//   name: '',
//   age: '',
//   gender: '',
//   phone: '',
//   email: '',
//   city: '',
//   state: '',
//   country: '',
//   address: ''
// };


// export const formik = useFormik({
//   initialValues: initialValues,
//   validationSchema: formSchema,
//   onSubmit: (values, { setSubmitting }) => {
//     console.log("Form submitted with values:", values);
//     formik.resetForm();
//     setSubmitting(false);
//   },
// });

//-------------------------------------------------
// {/* <InputField formik = {formikSchema}/> */}






import axios from 'axios';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').min(0, 'Age must be greater than zero'),
  gender: Yup.string().required('Gender is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  address: Yup.string().required('Address is required')
});

export const useCustomFormik = (setErrorMsg, user = null) => {
  return {
    initialValues: user || {
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      country: '',
      address: ''
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      if (user) {
        // If user exists, update the user
        axios.put(`http://localhost:4500/updateuser/${user.id}`, values)
          .then((res) => {
            console.log(res.data);
            setErrorMsg('');
            alert('User updated successfully');
            setSubmitting(false);
            resetForm();
          })
          .catch((error) => {
            console.error('There was an error updating the user!', error);
            setErrorMsg('There was an error updating the user!');
            setSubmitting(false);
          });
      } else {
        // Otherwise, add a new user
        axios.post('http://localhost:4500/adduser', values)
          .then((res) => {
            console.log(res.data);
            setErrorMsg('');
            alert('User added successfully');
            setSubmitting(false);
            resetForm();
          })
          .catch((error) => {
            console.error('There was an error adding the user!', error);
            setErrorMsg('There was an error adding the user!');
            setSubmitting(false);
          });
      }
    }
  };
};
