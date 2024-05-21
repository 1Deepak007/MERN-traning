import React from 'react';

const InputField = ({ formik, type, name, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={placeholder}
        className='form-control m-2'
      />
      {formik.errors[name] && formik.touched[name] ? (
        <p className='errorwarning' style={{ color: 'red' }}>{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

export default InputField;
