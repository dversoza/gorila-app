import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Cinvestidor from "./card/cardInvestidor";
import SemConsultor from "./card/SemConsultor";
import Carteira from "./card/CardCarteira";

import { Container } from "./styles";
export default function Main() {
  const [consultor, setConsultor] = useState(false);
  return (
    <Container>
      <Row>
        <Col md={4}>{consultor ? <Cinvestidor /> : <SemConsultor />}</Col>
        <Col md={8}>
          <Carteira />
        </Col>
      </Row>
    </Container>
  );
}
