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
                width= "150px"
                className = "footer-image"
              />
            </Stack>
          </Col>
          <Col>
            <h4>Contacts</h4>
            <p>Email: <a href="mailto:jascomec@gmail.com">jascomec@gmail.com</a></p>
            <p>Phone: <a href="tel:'3472273068'">347-223-3068</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
