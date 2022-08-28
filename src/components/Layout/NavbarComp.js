import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/homepage">
          Todo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/welcome/login">
              <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/welcome/register"
              className="justify-content-end"
            >
              <i className="fa-solid fa-user-plus"></i> Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
