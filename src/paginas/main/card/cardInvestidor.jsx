import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import React from 'react';
import "../estilo.css";


const cInvestidor= (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="../../img/pato.svg"  />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default cInvestidor;
  