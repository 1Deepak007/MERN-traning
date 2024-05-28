import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewData = ({ setEditUser }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const getAllUsers = () => {
        axios.get('http://localhost:4500/allusers')
            .then((res) => {
                setAllUsers(res.data);
            })
            .catch((error) => {
                console.log('There was an error fetching the users!', error);
            });
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const handleDeleteUser = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete the data ?");
        if (isConfirmed) {
            await axios.delete(`http://localhost:4500/deleteuser/${id}`)
                .then((res) => {
                    setErrorMsg('');
                    getAllUsers();
                    alert('User deleted successfully');
                })
                .catch((error) => {
                    console.error('There was an error deleting the user!', error);
                    setErrorMsg('There was an error deleting the user!');
                });
        }
    };

    const handleEditUser = (user) => {
        setEditUser(user);
    };

    return (
        <div>
            <h2>Users List</h2>
            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.country}</td>
                            <td>{user.address}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)} className='btn btn-info mx-2'>Edit</button>
                                <button onClick={() => handleDeleteUser(user.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewData;
