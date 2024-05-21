import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateStudent = () => {

    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const navigate = useNavigate();

    // adding student
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8081/student/add-student',{name,email})
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center  align-items-center '>
        <div className="w-50 bg-white rounded p-4">
            
            <form onSubmit={handleSubmit}>
                <h3 className='mb-4'>Add Student</h3>
                <label htmlFor="name">Name</label>
                <input onChange={(e)=>setname(e.target.value)} type="text" name='name' id='name' placeholder='Enter Name' className='form-control' />
            
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setemail(e.target.value)} type="email" email='email' id='email' placeholder='Enter Email' className='form-control' />

                <button className='btn btn-success'>Add Student</button>    
            </form>

        </div>
    </div>
  )
}

export default CreateStudent