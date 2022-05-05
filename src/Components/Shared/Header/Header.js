import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="p-4">
      <Navbar
        className="nav-menu"
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
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
              {user ? (
                <>
                  (
                  <button
                    onClick={handleSignOut}
                    className="btn btn-outline-danger"
                  >
                    Sign Out
                  </button>
                  <br />
                  <button className="btn btn-outline-success mr-2">
                    my items
                  </button>
                  <button className="btn btn-outline-success mr-2">
                    manage items
                  </button>
                  )
                </>
              ) : (
                <Nav.Link as={Link} to="/signIn">
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
