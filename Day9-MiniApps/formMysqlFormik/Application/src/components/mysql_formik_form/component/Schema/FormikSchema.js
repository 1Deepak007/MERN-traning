import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export const useCustomFormik = (setErrorMsg, user = null) => {
    const formik = useFormik({
        initialValues: {
            name: user?.name || '',
            age: user?.age || '',
            gender: user?.gender || '',
            phone: user?.phone || '',
            email: user?.email || '',
            city: user?.city || '',
            state: user?.state || '',
            country: user?.country || '',
            address: user?.address || '',
        },
        validationSchema: yup.object({
            name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            age: yup.number().required('Required'),
            gender: yup.string().required('Required'),
            phone: yup.string().min(10, 'Too Short!').max(10, 'Too Long!').required('Required'),
            email: yup.string().email('Invalid email').required('Required'),
            city: yup.string().required('Required'),
            state: yup.string().required('Required'),
            country: yup.string().required('Required'),
            address: yup.string().required('Required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setErrorMsg('');
            if (user) {
                axios.put(`http://localhost:4500/updateuser/${user.id}`, values)
                    .then((res) => {
                        alert('User updated successfully');
                        resetForm();
                    })
                    .catch((error) => {
                        console.error('There was an error updating the user!', error);
                        setErrorMsg('There was an error updating the user!');
                    });
            } else {
                axios.post('http://localhost:4500/adduser', values)
                    .then((res) => {
                        alert('User added successfully');
                        resetForm();
                    })
                    .catch((error) => {
                        console.error('There was an error adding the user!', error);
                        setErrorMsg('There was an error adding the user!');
                    });
            }
        },
    });

    return formik;
};
