import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserContext } from "../../userContext";

export const Header = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" className="mb-4">
      <Navbar.Brand href="">
        <Link to="/">FarFriends</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/SearchPage">Search Page</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Messages">Message</Link>
          </Nav.Link>
          <Nav.Link>Chat now</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to={"/Profile/" + currentUser.id}>Profile</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
