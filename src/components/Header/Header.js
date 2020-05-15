import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="">InterPals</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>Search</Nav.Link>
      <Nav.Link>Message</Nav.Link>
      <Nav.Link>Chat now</Nav.Link>
      <Nav.Link>Settings</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link>Profile</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
