import React, { useState } from "react";
import { Modal, Button, Form, FormGroup, Col, Row } from "react-bootstrap";
import { countryOptions } from "../../CountryData";
import axios from "axios";

import classes from "./RegisterModal.module.css";

const POST_URL =
  "https://cors-anywhere.herokuapp.com/https://far-friends.herokuapp.com/api/users";

const RegisterModal = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("Afganistan");
  const [age, setAge] = useState(60);

  const handleFirstName = (e) => {
    setFirstName(e);
    console.log(e);
  };

  const handleLastName = (e) => {
    setLastName(e);
    console.log(e);
  };

  const handleEmail = (e) => {
    setEmail(e);
    console.log(e);
  };

  const handleUsername = (e) => {
    setUsername(e);
    console.log(e);
  };
  const handlePassword = (e) => {
    setPassword(e);
    console.log(e);
  };
  const handleCountry = (e) => {
    setCountry(e);
    console.log(e);
  };
  const handleAge = (e) => {
    setAge(e);
    console.log(e);
  };

  const handleGender = (e) => {
    setGender(e);
    console.log(e);
  };

  const handlePostRegister = () => {
    let data = {
      userName: username,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      country: country,
      age: age,
    };
    axios
      .post(POST_URL, data)
      .then((res) => {
        setShow(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("in here");
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log("in here2");
      handlePostRegister();
    }
    setValidated(true);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <h6 variant="primary" onClick={handleShow}>
        Sign up
      </h6>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} xs={6} controlId="formGridFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  onChange={(e) => handleFirstName(e.target.value)}
                  type="text"
                  placeholder="First name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} xs={6} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  onChange={(e) => handleLastName(e.target.value)}
                  type="text"
                  placeholder="Last name"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => handleEmail(e.target.value)}
                  type="Email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={(e) => handleUsername(e.target.value)}
                  type="Email"
                  placeholder="Username"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => handlePassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={3} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  min={16}
                  max={110}
                  placeholder="Age"
                  onChange={(e) => handleAge(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} xs={4} controlId="formGridAge">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  onChange={(e) => handleGender(e.target.value)}
                  as="select"
                  required
                >
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm={7} controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  onChange={(e) => handleCountry(e.target.value)}
                  as="select"
                  defaultValue="Choose..."
                  required
                >
                  {countryOptions}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button type="submit">hey</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
