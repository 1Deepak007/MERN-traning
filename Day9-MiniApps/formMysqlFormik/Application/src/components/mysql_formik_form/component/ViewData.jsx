import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyForm from './MyForm';

const ViewData = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [editUser, setEditUser] = useState(null);

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

    const handleEditUser = async (id) => {
        await axios.get(`http://localhost:4500/getuser/${id}`)
            .then((res) => {
                setEditUser(res.data[0]); // Adjusting to fetch the first object from the result array
            })
            .catch((error) => {
                console.error('There was an error getting the user!', error);
                setErrorMsg('There was an error getting the user!');
            });
    }

    return (
        <div>
            {editUser ? (
                <MyForm user={editUser} resetEditUser={() => setEditUser(null)} />
            ) : (
                <div className="col">
                    <h2 className='text-center text-decoration-underline mb-2'>User Details </h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Country</th>
                                <th scope="col">Address</th>
                                <th scope="col">Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                    <td>{item.country}</td>
                                    <td>{item.address}</td>
                                    <td className='row'>
                                        <button className='btn btn-primary' onClick={() => handleEditUser(item.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteUser(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {errorMsg && <p className='errorwarning' style={{ color: 'red' }}>{errorMsg}</p>}
                </div>
            )}
        </div>
    );
}

export default ViewData;
