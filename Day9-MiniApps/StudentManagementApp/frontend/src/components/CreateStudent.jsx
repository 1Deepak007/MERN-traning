import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import {useCustomFormik} from '../schema/useCustomFormik'

const CreateStudent = ({user, resetEditUser}) => {

    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [cpassword,setc_password] = useState('');

    const navigate = useNavigate();

    // const [errorMsg, setErrorMsg] = useState("");

    
    //==> adding student
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8081/student/add-student',{name,email,password})
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }
    
    //----------------------------------------
    
    // const formik = useCustomFormik(setErrorMsg, user);
    // useEffect(()=>{
    //     if(user){
    //         formik.setValues(user);
    //     }
    // },[user]);

    // console.log(formik);
    


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center  align-items-center '>
        <div className="w-50 bg-white rounded p-4">
            <form onSubmit={handleSubmit}>
                <h3 className='mb-4'>Add Student</h3>
                <label htmlFor="name">Name</label>
                <input onChange={(e)=>setname(e.target.value)} type="text" name='name' id='name' placeholder='Enter Name' className='form-control' />
            
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setemail(e.target.value)} type="email" name='email' id='email' placeholder='Enter Email' className='form-control' />
                
                <label htmlFor="password">Password</label>
                <input onChange={(e)=>setpassword(e.target.value)} type="password" name='password' id='password' placeholder='Enter Password' className='form-control' />
                    
                <label htmlFor="cpassword">Confirm Password</label>
                <input onChange={(e)=>setc_password(e.target.value)} type="password" name='cpassword' id='cpassword' placeholder='Confirm Password' className='form-control' />

                <button className='btn btn-success my-2'>Add Student</button>    
            </form> 
        </div>

        {/* <div className="w-50 bg-white rounded p-4">
            <h3 className='mb-4'>{user? 'Update Student' : 'Add Student'}</h3>
            <form onSubmit={formik.onSubmit}>
                <label htmlFor="name">Name</label>
                <input formik={formik} type="text" name='name' id='name' placeholder='Enter Name' className='form-control' />
            
                <label htmlFor="email">Email</label>
                <input formik={formik}type="email" name='email' id='email' placeholder='Enter Email' className='form-control' />
                
                <label htmlFor="password">Password</label>
                <input formik={formik} type="password" name='password' id='password' placeholder='Enter Password' className='form-control' />
                    
                <label htmlFor="cpassword">Confirm Password</label>
                <input formik={formik} type="password" name='cpassword' id='cpassword' placeholder='Confirm Password' className='form-control' />

                <button type='submit' className='btn btn-success my-2'>Add Student</button>    
            </form>
        </div> */}
    </div>
  )
}

export default CreateStudent











// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useCustomFormik } from '../schema/useCustomFormik';

// const CreateStudent = ({ user, resetEditUser }) => {
//     const navigate = useNavigate();
//     const [errorMsg, setErrorMsg] = useState("");

//     const formik = useCustomFormik(setErrorMsg, user);

//     useEffect(() => {
//         if (user) {
//             formik.setValues({
//                 name: user.name,
//                 email: user.email,
//                 password: '',
//                 confirmPassword: ''
//             });
//         }
//     }, [user]);

//     return (
//         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//             <div className="w-50 bg-white rounded p-4">
//                 <h3 className='mb-4'>{user ? 'Update Student' : 'Add Student'}</h3>
//                 <Formik
//                     initialValues={formik.initialValues}
//                     validationSchema={formik.validationSchema}
//                     onSubmit={formik.handleSubmit}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form>
//                             <div className="mb-3">
//                                 <label htmlFor="name">Name</label>
//                                 <input type="text" name="name" id="name" placeholder="Enter Name" className="form-control" />
//                                 <ErrorMessage name="name" component="div" className="text-danger" />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="email">Email</label>
//                                 <input type="email" name="email" id="email" placeholder="Enter Email" className="form-control" />
//                                 <ErrorMessage name="email" component="div" className="text-danger" />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password" name="password" id="password" placeholder="Enter Password" className="form-control" />
//                                 <ErrorMessage name="password" component="div" className="text-danger" />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="confirmPassword">Confirm Password</label>
//                                 <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="form-control" />
//                                 <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
//                             </div>

//                             <button type="submit" className="btn btn-success my-2" disabled={isSubmitting}>
//                                 {user ? 'Update Student' : 'Add Student'}
//                             </button>
//                         </Form>
//                     )}
//                 </Formik>
//                 {errorMsg && <div className="text-danger mt-3">{errorMsg}</div>}
//             </div>
//         </div>
//     );
// }

// export default CreateStudent;





















































