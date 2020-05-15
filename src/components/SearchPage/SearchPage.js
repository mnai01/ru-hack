import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const check = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

export const SearchPage = () => {
  return (
    <Container fluid>
      <Row className="w-75">
        <Col>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" min="18" placeholder="From" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label></Form.Label>
                <Form.Control type="number" placeholder="To" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formSex">
                <Form.Label>Sex: </Form.Label>
                <Form.Check inline label="M" />
                <Form.Check inline label="F" />
              </Form.Group>{" "}
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="formPictureOnly">
                <Form.Label>With picture only: </Form.Label>
                <Form.Check inline />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
                <Form.Check type="checkbox" label="Languages I speak" />
                <Form.Check type="checkbox" label="Native speakers only" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formLanguage">
                <Form.Label>Looking for:</Form.Label>

                <Form.Check type="checkbox" label="Pens pals" />
                <Form.Check type="checkbox" label="Friends" />
                <Form.Check type="checkbox" label="Language practice" />
                <Form.Check type="checkbox" label="Meeting in person" />
              </Form.Group>
            </Form.Row>
            <Button>Submit</Button>
          </Form>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item action>Person 1</ListGroup.Item>
            <ListGroup.Item action>Person 2</ListGroup.Item>
            <ListGroup.Item action>Person 3</ListGroup.Item>
            <ListGroup.Item action>Person 4</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
