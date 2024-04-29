import React from 'react';
import { Link } from 'react-router-dom';





import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




function Navigationbar() {
  return (
    <>
    {/* <nav className="navbar navbar-dark bg-dark">
      <div className="container"> 
        <div className="navbar-nav row">
          <div className="col"><Link to='/'  className="nav-link">Home</Link></div>
          <div className="col"><Link to='/about'  className="nav-link">About</Link></div>
          <div className="col"><Link to='/login'  className="nav-link">Login</Link></div>
        </div>
      </div>
    </nav> */}


    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand to="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link  text-light' to="/">Home</Link>
            <Link className='nav-link  text-light' to="/about">About</Link>
            <Link className='nav-link  text-light' to="/login">Login</Link>
            <Link className='nav-link  text-light' to="/user">User</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-light'>
              <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigationbar;