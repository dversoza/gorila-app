import Photo from "../../../img/daniel.png";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import React from "react";

import {
  TitleConsoltor,
  Center,
  ConsultorImg,
  Description,
  Detail,
} from "../styles";

export default function CInvestidor() {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">
          <TitleConsoltor>MEU CONSULTOR</TitleConsoltor>
        </CardTitle>
      </CardBody>
      <CardBody>
        <Center>
          <ConsultorImg src={Photo} />
        </Center>
        <h3 className="text-center">Daniel Silva</h3>
        <Detail className="text-center">33 anos</Detail>
        <Description className="text-center">
          Sou consultor financeiro há mais de 10 anos no mercado e penso que
          meus clientes terão uma rentabilidade que os agrada sem sair da zona
          de conforto de risco. Minha principal atuação é no mercado
          imobiliário, já trabalhei de perto com os melhores do mercado e com
          certeza melhoraremos juntos
        </Description>
      </CardBody>
      <CardBody>
        <Row form>
          <Col md={6}>
            <Button block color="info">
              + INFO
            </Button>
          </Col>
          <Col md={6}>
            <Button block color="success">
              CHAT
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
