import React, { useState } from "react";
import { Container, Form, Col } from "react-bootstrap";
import classes from "./UserFilter.module.css";
import { countryOptions } from "../../CountryData";
import { languageOptions } from "../../LanguageData";

const check = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const countries = countryOptions;

const ages = [];

for (let i = 18; i <= 110; i++) {
  ages.push(<option value="{i}">{i}</option>);
}

export const SearchPage = () => {
  return (
    <Container className="p-0">
      <Form className={classes.filterForm}>
        <Form.Group>
          <Form.Label>
            <strong>User Name</strong>
          </Form.Label>
          <Form.Control type="text" name="userName" placeholder="Username" />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>
            <strong>Age</strong>
          </Form.Label>
          <Form.Row>
            <Col>
              <Form.Control as="select">
                <option disabled selected>
                  Min age
                </option>
                {ages}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select">
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
            label="Any"
            type="radio"
            name="gender"
            value=""
            checked
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
      </Form>
    </Container>
  );
};

export default SearchPage;
