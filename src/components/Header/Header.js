import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => (
  <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
    <Navbar.Brand href="">InterPals</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Search</Nav.Link>
        <Nav.Link>Message</Nav.Link>
        <Nav.Link>Chat now</Nav.Link>
        <Nav.Link>Settings</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link>Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
