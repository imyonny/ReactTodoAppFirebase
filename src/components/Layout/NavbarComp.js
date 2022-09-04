import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const NavbarComp = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/homepage">
          Todo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
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
              </>
            )}
            {user && (
              <Nav.Link onClick={logoutHandler}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
