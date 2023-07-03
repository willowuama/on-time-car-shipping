import React from 'react';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import QuoteModalForm from './QuoteForm';

const NavBar: React.FC = () => {
  return (
    <header className="logo">
        <Container>
          <Navbar bg="light" expand="lg" className="fixed-top">
            <Navbar.Brand href="#home" className="logo-wrapper">
              <img
                src="src/assets/logo2.png"
                alt="Logo"
                className="logo-image"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about" className="nav-link-text">About</Nav.Link>
                <Nav.Link href="#services" className="nav-link-text">Services</Nav.Link>
                <Nav.Link href="#faq" className="nav-link-text">FAQ</Nav.Link>
                <Nav.Link href="#contact" className="nav-link-text">Contact Us</Nav.Link>
              </Nav>
              <div className="Quote-btn-wrapper">
                <QuoteModalForm/>
                <Row>
                    <span className="nav-phone">877-317-3139</span>
                </Row>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
  );
};

export default NavBar;
