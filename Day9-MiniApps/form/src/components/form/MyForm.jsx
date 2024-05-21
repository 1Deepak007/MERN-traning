import { useFormik } from 'formik';
import React, { useState } from 'react';
import { formSchema } from './formik/formSchema';

const MyForm = () => {

  const [data, setData] = useState([]);
  // Formik : is used for form handling (getting form data)
  // Yup : is used for form validation

  const { values, errors, handleBlur, touched
    , handleChange
    , handleSubmit
  } = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      country: ''
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      setData([...data, values]);
    }
  });




  // const [formData, setFormData] = useState({
  //   name: '', age: '', gender: '', phone: '', email: '',
  //   city: '', state: '', country: '', address: ''
  // });

  // const customhandleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };


  // const customhandleSubmit = (e) => {
  //   e.preventDefault();
  //   setData([...data, formData]);
  //   setFormData({
  //     name: '', age: '', gender: '', phone: '', email: '',
  //     city: '', state: '', country: '', address: ''
  //   })
  // };
  // console.log(data)

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className='row px-3'>
      <div className="col" style={{ 'backgroundImage': `url('https://i0.wp.com/zeevector.com/wp-content/uploads/2021/03/Light-color-brochure-background_free-download.jpg?fit=1455%2C2058&ssl=1')`, 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'height': '100vh', 'width': '100%' }}>
        <h2 className='text-center'>Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" className='form-control m-2 ' />
              {
                errors.name && touched.name ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.name}</p>
                ) : null
              }
            </div>
            <div className="col">
              <input type="text" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} placeholder="Age" className='form-control m-2 ' />
              {
                errors.age && touched.age ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.age}</p>
                ) : null
              }
            </div>
            <div className="col">
              <input type="text" name="gender" value={values.gender} onChange={handleChange} onBlur={handleBlur} placeholder="Gender" className='form-control m-2 ' />
              {
                errors.gender && touched.name ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.gender}</p>
                ) : null
              }
            </div>

            <div className="col">
              <input type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Phone" className='form-control m-2 ' />
              {
                errors.phone && touched.phone ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.phone}</p>
                ) : null
              }
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" className='form-control m-2 ' />
              {
                errors.email && touched.email ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.email}</p>
                ) : null
              }
            </div>
            <div className="col">
              <input type="text" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur} placeholder="City" className='form-control m-2 ' />
              {
                errors.city && touched.city ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.city}</p>
                ) : null
              }
            </div>
            <div className="col">
              <input type="text" name="state" value={values.state} onChange={handleChange} onBlur={handleBlur} placeholder="State" className='form-control m-2 ' />
              {
                errors.state && touched.state ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.state}</p>
                ) : null
              }
            </div>
            <div className="col">
              <input type="text" name="country" value={values.country} onChange={handleChange} onBlur={handleBlur} placeholder="Country" className='form-control m-2 ' />
              {
                errors.country && touched.country ? (
                  <p className='errorwarning' style={{ color: 'red' }}>{errors.country}</p>
                ) : null
              }
            </div>
          </div>
          <textarea name="address" value={values.address} onChange={handleChange} onBlur={handleBlur} placeholder="Address" className='form-control m-2 ' />
          {
            errors.address && touched.address ? (
              <p className='errorwarning' style={{ color: 'red' }}>{errors.address}</p>
            ) : null
          }
          <button type="submit" className='btn btn-primary mx-2'>Submit</button>
        </form>
      </div>

      {/* ------------------------------------------------------------------------------------ */}

      <div className="col">
        <h2 className='text-center text-decoration-underline mb-2'> Details </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}


export default MyForm;