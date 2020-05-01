import React, { useState } from "react";
import LogoImg from "../../img/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Button,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaChartLine,
  FaBullseye,
  FaPowerOff,
  FaHome,
} from "react-icons/fa";

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
              <NavItem>
                <Navegar to="/main" tag={Link}>
                  <FaHome className="mr-md-2" /> Início
                </Navegar>
              </NavItem>
              <NavItem>
                <Navegar to="/carteira" tag={Link}>
                  <FaWallet className="mr-md-2" /> Minha Carteira
                </Navegar>
              </NavItem>
              <Navegar to="/metas" tag={Link}>
                <FaBullseye className="mr-md-2" /> Metas
              </Navegar>
              <Navegar to="/consultoria" tag={Link}>
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
