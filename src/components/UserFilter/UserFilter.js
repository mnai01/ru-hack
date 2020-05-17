import React, { useState, useContext } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { UserContext } from "../../userContext";
import classes from "./UserFilter.module.css";
import { countryOptions } from "../../CountryData";
import { languageOptions } from "../../LanguageData";
import axios from "axios";

export const SearchPage = () => {
  const { onlineUsers, loading, getFilteredUsers } = useContext(UserContext);

  const countries = countryOptions;

  const ages = [];

  for (let i = 18; i <= 110; i++) {
    ages.push(<option value={i}>{i}</option>);
  }

  const [username, setUsername] = useState("");
  const [minAge, setMinAge] = useState("18");
  const [maxAge, setMaxAge] = useState("110");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [hasPhoto, setHasPhoto] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleUsername = (e) => {
    setUsername(e);
    console.log(e);
  };

  const handleMinAge = (e) => {
    setMinAge(e);
    console.log(e);
  };

  const handleMaxAge = (e) => {
    setMaxAge(e);
    console.log(e);
  };

  const handleGender = (e) => {
    setGender(e);
    console.log(e);
  };

  const handleLocation = (e) => {
    setLocation(e);
    console.log(e);
  };

  const handleLanguage = (e) => {
    setLanguage(e);
    console.log(e);
  };

  const handleHasPhoto = (e) => {
    setHasPhoto(e);
    console.log(e);
  };

  const handleGETFiltered = () => {
    getFilteredUsers(
      minAge,
      maxAge,
      gender,
      location,
      language,
      hasPhoto,
      username
    );
  };

  return (
    <Container className="p-0">
      <Form className={classes.filterForm} onSubmit={(e) => submitHandler(e)}>
        <Form.Group>
          <Form.Label>
            <strong>User Name</strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="userName"
            placeholder="Username"
            onChange={(e) => handleUsername(e.target.value)}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Age</strong>
          </Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                as="select"
                onChange={(e) => {
                  handleMinAge(e.target.value);
                }}
              >
                <option disabled selected>
                  Min age
                </option>
                {ages}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                as="select"
                onChange={(e) => handleMaxAge(e.target.value)}
              >
                <option disabled selected>
                  Max age
                </option>
                {ages}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Gender</strong>
          </Form.Label>
          <br />
          <Form.Check
            inline
            label="Male"
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Female"
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Both"
            type="radio"
            name="gender"
            value=""
            onChange={(e) => handleGender(e.target.value)}
            defaultChecked
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Location</strong>
          </Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => handleLocation(e.target.value)}
          >
            <option selected>Choose Country...</option>
            {countries}
          </Form.Control>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Language</strong>
          </Form.Label>
          <Form.Control
            as="select"
            name="languages"
            onChange={(e) => handleLanguage(e.target.value)}
          >
            <option disabled selected>
              Choose Language...
            </option>
            {languageOptions}
          </Form.Control>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Other</strong>
          </Form.Label>
          <br />
          <Form.Check
            inline
            label="Must have photo"
            type="checkbox"
            name="photo"
            value="photosOnly"
            onChange={(e) => handleHasPhoto(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={handleGETFiltered}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SearchPage;
