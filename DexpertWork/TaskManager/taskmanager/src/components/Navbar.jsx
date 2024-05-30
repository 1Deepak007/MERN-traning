import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

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
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container style={{backgroundColor:'lightcyan', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className='my-2'>
                <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="#home">Home</Nav.Link>
                        <Nav.Link to="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={handleLogout} className='btn-danger'>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
