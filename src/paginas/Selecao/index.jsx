import React from "react";
import Perfil from "../../img/daniel.png";
import { Row, Col, Card, CardBody } from "reactstrap";

import {
  Container,
  TitleConsoltor,
  Photo,
  ProfileContainer,
  About,
  TitleHistorico,
} from "./styles";

export default function Selecao() {
  return (
    <Container>
      <Row form>
        <Col md={8}>
          <Card>
            <Row>
              <Col md={6} style={{ borderRight: "solid 1px rgba(0,0,0,.1)" }}>
                <TitleConsoltor className="text-center">
                  CONSULTOR RECOMENDADO
                </TitleConsoltor>
                <CardBody>
                  <Row>
                    <Col md={4}>
                      <Photo src={Perfil} />
                    </Col>
                    <Col md={8}>
                      <ProfileContainer>
                        <h1>Daniel Silva, 33 Anos</h1>
                        <span>Consultor financeiro a 10 anos</span>
                        <p>Especialista no mercado Imobiliário</p>
                      </ProfileContainer>
                    </Col>
                  </Row>
                  <hr />
                  <h1>Sobre</h1>
                  <About>
                    Sou consultor financeiro há mais de 10 anos no mercado e
                    penso que meus clientes terão uma rentabilidade que os
                    agrada sem sair da zona de conforto de risco. Minha
                    principal atuação é no mercado imobiliário, já trabalhei de
                    perto com os melhores do mercado e com certeza melhoraremos
                    juntos
                  </About>
                </CardBody>
              </Col>
              <Col md={6}>
                <TitleHistorico>HISTÓRICO</TitleHistorico>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>dhjgasdh</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
