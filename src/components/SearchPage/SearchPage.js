import React from "react";
import UserFilter from "../UserFilter/UserFilter";
import UserTiles from "../UserTiles/UserTiles";
import { Container, Row, Col } from "react-bootstrap";

const SearchPage = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col>
          <UserFilter />
        </Col>
        <Col>
          <UserTiles />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
