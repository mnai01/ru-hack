import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Link } from "react-router-dom";
export const Header = () => (
<<<<<<< HEAD
  <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
    <Navbar.Brand href="">
      <Link to={"/"}>Interpals</Link>
    </Navbar.Brand>
=======
  <Navbar bg="dark" variant="dark" sticky="top" expand="sm" className="mb-4">
    <Navbar.Brand href="">FarFriends</Navbar.Brand>
>>>>>>> search-page
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Search</Nav.Link>
        <Nav.Link>Message</Nav.Link>
        <Nav.Link>Chat now</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link>Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
