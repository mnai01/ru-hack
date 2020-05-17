import React, { useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import classes from "./UserFilter.module.css";
import { countryOptions } from "../../CountryData";
import { languageOptions } from "../../LanguageData";

export const SearchPage = () => {
  const countries = countryOptions;

  const ages = [];

  for (let i = 18; i <= 110; i++) {
    ages.push(<option value="{i}">{i}</option>);
  }

  const [username, setUsername] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [hasPhoto, setHasPhoto] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let age = 66;
    setMaxAge(age);
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
            onChange={(e) => setUsername(e.target.value)}
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
                  setMinAge(e.target.value);
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
                onChange={(e) => setMaxAge(e.target.value)}
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
          />
          <Form.Check
            inline
            label="Female"
            type="radio"
            name="gender"
            value="female"
          />
          <Form.Check
            inline
            label="Both"
            type="radio"
            name="gender"
            value="both"
            defaultChecked
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Location</strong>
          </Form.Label>
          <Form.Control as="select">
            <option disabled selected>
              Choose Country...
            </option>
            {countries}
          </Form.Control>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Language</strong>
          </Form.Label>
          <Form.Control as="select" name="languages">
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
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default SearchPage;
