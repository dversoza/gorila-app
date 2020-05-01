import React from "react";
import "./estilo.css";
import {Container, Col, Row, Div, Label} from 'reactstrap';
import Cinvestidor from "./card/cardInvestidor";

const main = () => {

  return (
    <div style={{ backgroundColor: "#f1f1f1", width: "100%", height: "100vh" }}>
      <Container className="main">

            <Row className="ColInvestidor">
                <Col><a id="cabecalho">Meu Investidor</a></Col>
            </Row>
         

            <Col>
                  <Row className="minha-carteira">carteira</Row>
            </Col>

            <Col>
                  <Row className="meus-invetimentos">invetimentos</Row>
            </Col>
          

      </Container>
    </div>
  );
};
export default main;
