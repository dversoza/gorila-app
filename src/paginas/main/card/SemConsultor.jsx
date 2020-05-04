import Photo from "../../../img/img_avatar.png";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import React from "react";

import { TitleConsoltor, Center, ConsultorImg, Description } from "../styles";

export default function SemConsultor() {
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
        <h3 className="text-center">Você ainda não possui um consultor</h3>
        <Description className="text-center">
          O consultor podera te auxiliar na hora de uma decisão de investimento,
          te deixando seguro na hora de investir sem medo.
        </Description>
      </CardBody>
      <CardBody>
        <Button block color="info">
          PROCURAR CONSULTOR
        </Button>
      </CardBody>
    </Card>
  );
}
