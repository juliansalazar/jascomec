import React from 'react'
import '../styles/Footer.css'
import { Container, Row, Col, Stack, Image, Nav, NavLink } from 'react-bootstrap'
import logo from '../assets/jascomec-logo-transparent.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container fluid>
        <Row className='text-black p-4'>
          <Col className='mx-5'>
            <Stack>
              <Image
                src = {logo} 
                alt = "logo"
                width = "150px"
                className = "footer-image"
              />
            </Stack>
          </Col>
          <Col>
            <Nav className='flex-column fs-5'>
              Useful Links
              <NavLink href='#' className='text-black'>Home</NavLink>
              <NavLink href='#' className='text-black'>Servicios</NavLink>
              <NavLink href='#' className='text-black'>Contacto</NavLink>
            </Nav>
          </Col>
          <Col>
            <h4>Contactos</h4>
            <p>Email: AAA</p>
            <p>Teléfono: 1234567890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
