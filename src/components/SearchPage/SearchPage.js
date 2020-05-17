import React, { useContext, useEffect } from "react";
import UserFilter from "../UserFilter/UserFilter";
import UserTiles from "../UserTiles/UserTiles";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../../userContext";
const SearchPage = () => {
  const { onlineUsers, loading, getOnlineUsers } = useContext(UserContext);

  useEffect(() => {
    getOnlineUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="p-5">
      <Row>
        <Col xs={12} sm={5} md={4} lg={3} xl={2}>
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
