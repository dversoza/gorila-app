import React, { useState } from "react";
import LogoImg from "../../img/logo.svg";
import { Collapse, Navbar, NavbarToggler, Nav, Button } from "reactstrap";
import { FaWallet, FaChartLine, FaBullseye, FaPowerOff } from "react-icons/fa";

import { Container, RightSide, LeftSide, Logo, Navegar } from "./styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <LeftSide>
        <Logo src={LogoImg} />
      </LeftSide>
      <RightSide>
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Navegar to="/carteira">
                <FaWallet className="mr-md-2" /> Minha Carteira
              </Navegar>
              <Navegar to="/metas">
                <FaBullseye className="mr-md-2" /> Metas
              </Navegar>
              <Navegar to="/consultas">
                <FaChartLine className="mr-md-2" /> Consultorias
              </Navegar>
              <Button outline size="sm" color="danger" onClick={() => {}}>
                <FaPowerOff /> Sair
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </RightSide>
    </Container>
  );
}
