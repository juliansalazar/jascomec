import React from 'react'
import '../styles/Footer.css'
import { Container, Row, Col, Stack, Image, Nav, NavLink } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container fluid>
        <Row className='text-black p-4'>
          <Col className='mx-5'>
            <h4>Contacts and Referrals:</h4>
            <p>Email: <a href="mailto:jascomec@gmail.com">jascomec@gmail.com</a></p>
            <p>Phone: <a href="tel:'3472273068'">347-223-3068</a></p>
            <p>Address: 202 W 96th Str, New York, New York 10025</p>
            <p>Hours: Monday - Friday, 9 AM - 5 PM</p>
            <p>All rights reserved.</p>
            <p>Website design by <a href='/' rel='noopener noreferrer'>Julian Salazar</a></p>
            <Stack direction='horizontal' className='social-media'>
              |<Nav.Link href='https://www.linkedin.com/in/juliansalazarv/' >LinkedIn</Nav.Link>
               | |
              <Nav.Link href='https://github.com/juliansalazar'>GitHub</Nav.Link>
              |
            </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
