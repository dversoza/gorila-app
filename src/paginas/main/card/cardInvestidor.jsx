import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import React from 'react';
import "../estilo.css";


const cInvestidor= () => {
    return (
      <div>
        <Card className="Card">
          <CardImg src="../img/pato.svg"  className="cImg"/>
          <CardBody className="CardBody">
            <a>Thiago Nigri</a>
            <a>Consultor ha 19 anos</a>
            <a>Some quick example text to build on the card title and make up the bulk of the card's content.</a>
            <Button classeName="cBtn">Button</Button>
          </CardBody>
          
        </Card>
      </div>
    );
  };
  
  export default cInvestidor;
  