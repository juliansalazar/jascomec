import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BasicExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" >Julian Salazar</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#servicios">Services</Nav.Link>
            <Nav.Link href="#precios">Pricing</Nav.Link>
            <NavDropdown title="Other Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Book 30 minutes free</NavDropdown.Item>
              <NavDropdown.Item href="tel:'3472273068'">Call</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://wa.me/593984976911">
                Whatsapp
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default BasicExample;