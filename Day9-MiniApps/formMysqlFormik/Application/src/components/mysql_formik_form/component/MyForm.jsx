import React, { useState, useEffect } from 'react';
import InputField from './subComponents/InputField';
import { useCustomFormik } from './Schema/FormikSchema';
import axios from 'axios';

const MyForm = ({ user, resetEditUser }) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [editUser, setEditUser] = useState(null);

    // const handleEditUser = async (id) => {
    //   await axios.get(`http://localhost:4500/getuser/${id}`)
    //       .then((res) => {
    //           setEditUser(res.data[0]); // Adjusting to fetch the first object from the result array
    //       })
    //       .catch((error) => {
    //           console.error('There was an error getting the user!', error);
    //           setErrorMsg('There was an error getting the user!');
    //       });
    // }

    

    const formik = useCustomFormik(setErrorMsg, user);

    useEffect(() => {
        if (user) {
            formik.setValues(user);
        }
    }, [user]);

    const handleCancel = () => {
        formik.resetForm();
        resetEditUser();
    };

    // const handleUpdateUser = async (values) => {
    //     try {
    //         await axios.put(`http://localhost:4500/updateuser/${user.id}`, values);
    //         alert('User updated successfully');
    //         resetEditUser();
    //     } catch (error) {
    //         console.error('There was an error updating the user!', error);
    //         setErrorMsg('There was an error updating the user!');
    //     }
    // };

    return (
    
    <>

      {/* { editUser ? 
        (
        <MyForm user={editUser} resetEditUser={() => setEditUser(null)} />
        ) : 
        ( */}


        <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100%' }}>
            <h2 className='text-center'>{user ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <InputField formik={formik} type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col">
                        <InputField formik={formik} type="text" name="age" placeholder="Age" />
                    </div>
                    <div className="col">
                        <InputField formik={formik} type="text" name="gender" placeholder="Gender" />
                    </div>
                    <div className="col">
                        <InputField formik={formik} type="text" name="phone" placeholder="Phone" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <InputField formik={formik} type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="col">
                        <InputField formik={formik} type="text" name="city" placeholder="City" />
                    </div>
                    <div className="col">
                        <InputField formik={formik} type="text" name="state" placeholder="State" />
                    </div>
                    <div className="col">
                        <InputField formik={formik} type="text" name="country" placeholder="Country" />
                    </div>
                </div>
                <div className="col-12">
                    <textarea
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Address"
                        className='form-control m-2'
                    />
                    {formik.errors.address && formik.touched.address ? (
                        <p className='errorwarning' style={{ color: 'red' }}>{formik.errors.address}</p>
                    ) : null}
                </div>
                <button type="submit" className='btn btn-primary mx-2'>{user ? 'Update' : 'Submit'}</button>
                {user && <button type="button" className='btn btn-secondary mx-2' onClick={handleCancel}>Cancel</button>}
                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
            </form>
        </div> 
        
        
        {/* )
      } */}

    
    </>
    );
};

export default MyForm;
