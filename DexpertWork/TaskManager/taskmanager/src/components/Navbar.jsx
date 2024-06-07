import axios from 'axios';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css'
import '../styles/fontStyles.css'
import '../styles/fontStyles.css'



const Navigationbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.get('http://localhost:8182/logout')
            .then((response) => {
                if (response.data.logout) {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Navbar className='bg-light' data-bs-theme="light">
                <Navbar.Brand href="#home" className='mx-4 px-2 border rounded-xl'>Personal Task Manager</Navbar.Brand>
                <Nav className="me-auto ms-2">
                    <Nav.Link to="/" className='hover:translate-y-1 fw-bold rounded-md hover:bg-slate-800 hover:text-white active:bg-green-400 '>Home</Nav.Link>
                    <Nav.Link className='hover:translate-y-1 fw-bold rounded-md hover:bg-slate-800 hover:text-white active:bg-green-400' onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigationbar;