import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/userdetails.css'

const UserDetailsModal = ({ userId, closeModal }) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8182/user/${userId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:8182/updateuser/${userId}`, userDetails);
      closeModal();
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Edit User Details</h2>
        <input
          type="text"
          name="username"
          value={userDetails.username}
          onChange={handleInputChange}
          className="form-control m-4"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
          className="form-control m-4"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={userDetails.password}
          onChange={handleInputChange}
          className="form-control m-4"
          placeholder="New Password"
        />
        <button onClick={handleUpdateUser} className="btnStyl2 m-4">Update User</button>
      </div>
    </div>
  );
};

export default UserDetailsModal;
