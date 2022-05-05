import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="p-4">
      <Navbar
        className="nav-menu "
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>Refresh-resources</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href="home#products">Products</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/signIn">
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="/signUp">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
