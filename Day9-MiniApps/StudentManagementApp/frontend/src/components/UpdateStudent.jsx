import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({ Name: '', Email: '' });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Fetching and displaying data to be updated in the form
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`http://localhost:8081/student/get-students/${id}`);
                if (res.data.length > 0) {
                    setStudent(res.data[0]);
                    setName(res.data[0].Name);
                    setEmail(res.data[0].Email);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchStudent();
    }, [id]);
    //--------------------------------------------------------------

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8081/student/update-student/${id}`, { name, email });
            navigate('/');
        } catch (err) {
            console.log('Error updating data:', err);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-4">
                <form onSubmit={handleSubmit}>
                    <h3 className='mb-4'>Update Student</h3>
                    <label htmlFor="currentName">Current Name: {student.Name}</label><br/>
                    <label htmlFor="currentEmail">Current Email: {student.Email}</label><br/><br/>

                    <label htmlFor="Name">Updated Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='Name'
                        id='Name'
                        placeholder='Enter Name'
                        className='form-control'
                    />

                    <label htmlFor="Email">Updated Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='Email'
                        id='Email'
                        placeholder='Enter Email'
                        className='form-control'
                    />

                    <button className='btn btn-success my-2'>Update Details</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateStudent;

