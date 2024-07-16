import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BasicExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="" >JASCOMEC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#precios">Precios</Nav.Link>
            <NavDropdown title="Accionables" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Agendar 30 minutos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Llamar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
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