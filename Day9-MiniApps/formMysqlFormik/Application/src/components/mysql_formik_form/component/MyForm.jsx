import React, { useState, useEffect } from 'react';
import InputField from './subComponents/InputField';
import { useCustomFormik } from './Schema/FormikSchema';

const MyForm = ({ user, resetEditUser }) => {
    const [errorMsg, setErrorMsg] = useState("");

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
    
    return (
        <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100%' }} className='px-4'>
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
    );
};

export default MyForm;
