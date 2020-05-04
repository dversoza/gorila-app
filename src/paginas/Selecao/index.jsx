import React from "react";
import Perfil from "../../img/daniel.png";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { FaTimesCircle, FaHeart } from "react-icons/fa";

import {
  Container,
  TitleConsoltor,
  Photo,
  ProfileContainer,
  About,
  TitleHistorico,
  ContainerHistorico,
  TitleCurriculo,
  ContainerCurriculo,
  ContCard,
} from "./styles";

export default function Selecao() {
  return (
    <Container>
      <Row>
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
                <TitleHistorico>
                  <span>Histórico</span>
                </TitleHistorico>

                <CardBody>
                  <ContainerHistorico>
                    <div>
                      <h5>Casa de análise SENO</h5>
                      Jan. 2017 a Jun 2017
                    </div>
                    Coodenador do setor de recomendações imobiliárias
                  </ContainerHistorico>
                  <ContainerHistorico>
                    <div>
                      <h5>Consultora Clarifica</h5>
                      Set. 2017 a Dez 2019
                    </div>
                    Atendia mais de 70 clientes
                  </ContainerHistorico>
                </CardBody>
                <TitleCurriculo>
                  <span>Currículo</span>
                </TitleCurriculo>
                <CardBody>
                  <ContainerCurriculo>
                    <div>
                      <h5>Economia - USP</h5>
                    </div>
                    Jan. 2007 a Jun 2011
                  </ContainerCurriculo>
                  <ContainerCurriculo>
                    <div>
                      <h5>MBA - Finanças aplicadas</h5>
                    </div>
                    Ago. 2012 a Jun 2013
                  </ContainerCurriculo>
                </CardBody>
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <Button outline block color="danger">
                        <FaTimesCircle size="50px" />
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button outline block color="success">
                        <FaHeart size="50px" />
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <TitleConsoltor className="text-center">
              RENTABILIDADES ANTERIORES
            </TitleConsoltor>
            <CardBody>
              <ContCard>
                <h1>Carteira agressiva</h1>
                <p>34% de rentabilidade anual</p>
              </ContCard>
              <ContCard>
                <h1>Carteira Conservadora</h1>
                <p>19% de rentabilidade anual</p>
              </ContCard>
              <ContCard>
                <h1>Carteira de Imóveis</h1>
                <p>24% de rentabilidade anual</p>
              </ContCard>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
