import React, { useState } from "react";
import {
  FormGroup,
  ListGroup,
  Button,
  Container,
  Form,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import classes from "./UserFilter.module.css";

const check = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

export const SearchPage = () => {
  return (
    <Container className={classes.filterForm}>
      <Form>
        <Form.Row>
          <FormGroup as={Col} sm={2}>
            <Form.Label>Age</Form.Label>
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="formGridCity">
            <Form.Control type="number" min="18" placeholder="From" />
          </Form.Group>

          <Form.Group as={Col} sm={2} controlId="formGridCity">
            <Form.Control type="number" max="110" placeholder="To" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="formGridCity"></Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Label as={Col} xs={0}>
            Sex:{" "}
          </Form.Label>

          <Form.Group as={Col} sm={2} controlId="formSex">
            <Form.Check inline label="M" />
            <Form.Check inline label="F" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} xs={0} controlId="formPictureOnly">
            <Form.Label>With picture only: </Form.Label>
          </Form.Group>

          <Form.Group as={Col} controlId="formPictureOnly">
            <Form.Check inline />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} sm={2} controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="formLanguage">
            <Form.Label>Language</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col}>
            <Form.Check type="checkbox" label="Languages I speak" />
            <Form.Check type="checkbox" label="Native speakers only" />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={2} controlId="formLanguage">
            <Form.Label>Looking for:</Form.Label>
            <FormGroup>
              <Form.Check type="checkbox" label="Pens pals" />
              <Form.Check type="checkbox" label="Friends" />
              <Form.Check type="checkbox" label="Language practice" />
              <Form.Check type="checkbox" label="Meeting in person" />
            </FormGroup>
          </Form.Group>
        </Form.Row>

        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default SearchPage;
