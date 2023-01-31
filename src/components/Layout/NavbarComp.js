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
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/homepage">
          <i className="bi bi-card-checklist" /> Todo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/welcome/login">
                  <i className="bi bi-box-arrow-in-left"></i> Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/welcome/register"
                  className="justify-content-end"
                >
                  <i className="bi bi-person-plus"></i> Sign Up
                </Nav.Link>
              </>
            )}
            {user && (
              <Nav.Link onClick={logoutHandler}>
                <i className="bi bi-box-arrow-left"></i> Logout
              </Nav.Link>
            )}
          </Nav>
          {user && (
            <div>
              <i className="bi bi-person-circle" /> {user.email}
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
