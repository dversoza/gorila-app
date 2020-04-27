import React from 'react';
import "./estilo.css";

const Header = () => {
 
 return (<div class="menu">
   <div class="header">
   <img src={require("../../img/logo.svg")} />
  <div class="header-right">
    <a href="/login">Login</a>
    <a class="btn" href="/cadastro">Cadastro</a>
  </div>
  <div>
    
  </div>
</div> 
</div>
 )
}
export default Header;