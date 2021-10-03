import React from 'react';
import { Navbar, Nav, Form, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../constraints";

function Navigation({ user, onLogout }) {
  function handleLogout() {
    fetch(BASE_URL + "/logout", {
      method: "DELETE",
    }).then((r) => onLogout());
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>   
        </LinkContainer>
        <LinkContainer to="/programs">
          <Nav.Link>Programs</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/people">
          <Nav.Link>Information</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    <Form inline className="mx-3">
      <ButtonGroup>
      {user ? (
        <Button variant="secondary" onClick={handleLogout} to="/login">Logout</Button>
      ) : (
        <Button variant="secondary" as={Link} to="/login">Login</Button>
      )}
        <Button variant="secondary" as={Link} to="/signup">Signup</Button>
      </ButtonGroup> 
    </Form>
    </Navbar>
  );
}

export default Navigation;