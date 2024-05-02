import React from 'react';
import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




function Navigationbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark text-light">
        <Container>
          <Navbar.Brand to="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link  text-light' to="/">Home</Link>
              <Link className='nav-link  text-light' to="/about">About</Link>
              <Link className='nav-link  text-light' to="/contactus">Contact Us</Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-light'>
              <Link className='nav-link text-dark' to="/card">Card</Link>
              <NavDropdown.Divider />
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;