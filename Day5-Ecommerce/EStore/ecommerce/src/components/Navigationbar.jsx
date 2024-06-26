import React from 'react';
import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark text-light" style={{background: "radial-gradient(circle, #41295a, #2F0743)"}}>
        <Container>
          <Navbar.Brand to="#home" className='text-light'> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link  text-light' to="/">Home</Link>
              <Link className='nav-link  text-light' to="/cart">Cart <IoCartOutline style={{height:'100%'}}/></Link>
              <Link className='nav-link  text-light' to="/about">About</Link>
              <Link className='nav-link  text-light' to="/contactus">Contact Us</Link>
              {/* <Link className='nav-link  text-light' to="/viewproduct">View Product</Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-light'>
              <Link className='nav-link text-dark' to="/card">Card</Link>
              <NavDropdown.Divider />
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
          <h4 className='mx-3'><HiOutlineBuildingStorefront/> EStore</h4>
      </Navbar>
    </>
  );
}

export default Navigationbar;