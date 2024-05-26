import * as Yup from 'yup';

export const formikSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required.')
        .min(4, 'Name must be at least 4 characters long.'),
    email: Yup.string()
        .email('Invalid email format.')
        .required('Email is required.'),
    password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
        .matches(/[0-9]/, 'Password must contain at least one number.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
});




// import * as Yup from 'yup';
// import { validations } from './Validations';
// import axios from 'axios';

// export const formikSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required..!'),
//     email: Yup.string().email('Invalid email').required('Email is required..!'),
//     password: Yup.string().required('Password is required')
//                             .min(8, 'Password must be at least 8 characters long')
//                             .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//                             .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//                             .matches(/[0-9]/, 'Password must contain at least one number')
//                             .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
//     confirmPassword: Yup.string().required('Confirm Password is required..!').oneOf([Yup.ref('password'), null], 'Passwords must match')
// });

// export const useCustomFormik = (setErrorMsg, user=null) => {
//     return {
//         initialValues: user || {
//             name:'', email:'', password:'',confirmPassword:''
//         },
//         validationSchema: validations,
//         onSubmit: (values, {resetForm, setSubmitting}) => {
//             // If name or email exist, update the user
//             if(user){
//                 axios.put(`http://localhost:8081/student/update-student/${user.id}`, values)
//                     .then((res)=>{
//                         console.log(res.data);
//                         setErrorMsg('');
//                         alert('Updated Successfully');
//                         setSubmitting(false);
//                         resetForm();
//                     })
//                     .catch((error)=>{
//                         console.log('Error updating details : ',error);
//                         setErrorMsg(error.response.data.message);
//                         setSubmitting(false)
//                     })
//             }
//             else{
//                 axios.post('http://localhost:8081/student/add-student', values)
//                 .then((res)=>{
//                     console.log(res.data);
//                     setErrorMsg('');
//                     alert('Added successfully');
//                     setSubmitting(false);
//                     resetForm();
//                 })
//                 .catch((error)=>{
//                     console.log('Error adding details!',error);
//                     setErrorMsg('There was error adding user!');
//                     setSubmitting(false);
//                 });
//             }
//         }
//     }
// }
