import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Cinvestidor from "./card/cardInvestidor";
import Carteira from "./card/CardCarteira";

import { Container } from "./styles";
export default function Main2() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Cinvestidor />
        </Col>
        <Col md={8}>
          <Carteira />
        </Col>
      </Row>
    </Container>
  );
}
