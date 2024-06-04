import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css'
import '../styles/fontStyles.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <Navbar expand="lg" className="bg-body-tertiary shadow-xl">
                <Container>
                    <Navbar.Brand href="#home" className='cursive'>Task Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='cursive'>Home</Nav.Link>
                            <Nav.Link onClick={handleLogout} className='zoom text-danger cursive'>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search Task" aria-label="Search"/>
                       <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </Container>
            </Navbar>
        </>
    );
};

export default Navigationbar;
