import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-dark text-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <NavDropdown title="Hooks" id="basic-nav-dropdown" className="text-light">
              <NavDropdown.Item href="/usestatehook">UseState Hook</NavDropdown.Item>
              <NavDropdown.Item href="/useEffecthook">UseEffect Hook</NavDropdown.Item>
              <NavDropdown.Item href="/useRefhook">UseRef Hook</NavDropdown.Item>

              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
