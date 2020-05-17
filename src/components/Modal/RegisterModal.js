import React, { useState } from "react";
import { Modal, Button, Form, FormGroup, Col, Row } from "react-bootstrap";
import { countryOptions } from "../../CountryData";
import { languageOptions } from "../../LanguageData";

import axios from "axios";

import classes from "./RegisterModal.module.css";

const POST_URL = "https://far-friends.herokuapp.com/api/users";

const RegisterModal = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState();
  const [age, setAge] = useState(60);
  const [spokenLanguage, setSpokenLanguage] = useState();
  const [learningLanguage, setLearningLanguage] = useState();

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

  const handleSpokenLanguage = (e) => {
    setSpokenLanguage(e);
    console.log("spoken " + e);
  };

  const HandleLearningLanguage = (e) => {
    setLearningLanguage(e);
    console.log("learning " + e);
  };

  const handlePostRegister = () => {
    let data = {
      userName: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      country: country,
      age: age,
      languagesSpoken: spokenLanguage,
      languagesInterested: learningLanguage,
    };
    console.log(POST_URL, data);
    axios
      .post(POST_URL, data)
      .then((res) => {
        setStatus("Successful!");
        console.log(res);
      })
      .catch((err) => {
        setStatus("Error!");
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("in here");
      // this prevents html elements from executing there functions further
      // but it lets mine continue, for instance when u submit a form
      // it will automatically refresh cuz the html element form is created that way
      // but prevemtDefault stops that from occuring but maintains ur functions still.
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log("in here2");
      event.preventDefault();
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
                  type="text"
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
                  required
                >
                  <option disabled selected>
                    Country
                  </option>
                  {countryOptions}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={6} controlId="formGridAge">
                <Form.Label>Native Language</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => handleSpokenLanguage(e.target.value)}
                  required
                >
                  <option disabled selected>
                    Native Language
                  </option>
                  {languageOptions}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={6} controlId="formGridAge">
                <Form.Label>Language interests</Form.Label>
                <Form.Control
                  onChange={(e) => HandleLearningLanguage(e.target.value)}
                  as="select"
                  required
                >
                  <option disabled selected>
                    Language interests
                  </option>
                  {languageOptions}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="ControlTextareaBio">
                <Form.Label>Add a bio</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <h4>{status}</h4>
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
