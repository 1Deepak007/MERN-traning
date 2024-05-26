import { useFormik } from 'formik';
import axios from 'axios';
import { formikSchema } from './FormikSchema';

export const useCustomFormik = (setErrorMsg, user = null) => {
    return useFormik({
        initialValues: user || {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: formikSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {
            const endpoint = user 
                ? `http://localhost:8081/student/update-student/${user.id}`
                : `http://localhost:8081/student/add-student`;

            // http://localhost:8081/student/add-student',{name,email,password}


            const method = user ? 'put' : 'post';
            
            axios[method](endpoint, values)
                .then((res) => {
                    console.log(res.data);
                    setErrorMsg('');
                    alert(user ? 'Updated successfully' : 'Added successfully');
                    setSubmitting(false);
                    resetForm();
                })
                .catch((error) => {
                    console.log('Error submitting form:', error);
                    setErrorMsg('There was an error submitting the form!');
                    setSubmitting(false);
                });
        }
    });
};







// export const useCustomFormik = (setErrorMsg, user = null) => {
//     return useFormik({
//         initialValues: user || {
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         },
//         validationSchema: formikSchema,
//         onSubmit: (values, { resetForm, setSubmitting }) => {
//             const endpoint = user ? `http://localhost:8081/student/update-student/${user.id}` : 'http://localhost:8081/student/add-student';
//             const method = user ? 'put' : 'post';
            
//             axios[method](endpoint, values)
//                 .then((res) => {
//                     console.log(res.data);
//                     setErrorMsg('');
//                     alert(user ? 'Updated successfully' : 'Added successfully');
//                     setSubmitting(false);
//                     resetForm();
//                 })
//                 .catch((error) => {
//                     console.log('Error submitting form:', error);
//                     setErrorMsg('There was an error submitting the form!');
//                     setSubmitting(false);
//                 });
//         }
//     });
// };
