import axios from 'axios';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
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

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => { setDropdownVisible(!isDropdownVisible); };

    return (
        <>
            <Navbar className='bg-dark' data-bs-theme="black">
                <Navbar.Brand href="#home" className='mx-4 px-2 bg-slate-50 border rounded-xl text-xl'>Personal Task Manager</Navbar.Brand>
                {/* <Nav className="me-auto ms-1">
                    <Nav.Link to="/" className='hover:translate-y-1 fw-bold rounded-md hover:bg-blue-400 hover:text-red-50 active:bg-green-400 me-1'>Home</Nav.Link>
                    <Nav.Link className='hover:translate-y-1 fw-bold rounded-md hover:bg-blue-400 hover:text-white active:bg-green-400' onClick={handleLogout}>Logout</Nav.Link>
                </Nav> */}

                <div className="relative ml-auto me-2">
                    <img src='https://cdn-icons-png.flaticon.com/512/10337/10337609.png' alt="User logo" className="w-10 h-15 me-3 rounded-full cursor-pointer" onClick={toggleDropdown} />
                    <div id="dropdownMenu" className={`${isDropdownVisible ? 'block' : 'hidden'} absolute right-0 bg-black rounded-lg shadow-lg mt-3 w-48`}>
                        <Link to="/" className="block px-4 py-2 text-white no-underline hover:bg-gray-500">Home</Link>
                        <Link to="/profile" className="block px-4 py-2 text-white no-underline hover:bg-gray-500">Profile</Link>
                        <Link onClick={handleLogout} className="block px-4 py-2 text-white no-underline hover:bg-gray-500">Logout</Link>
                    </div>
                </div>
            </Navbar>
        </>
    );
};

export default Navigationbar;