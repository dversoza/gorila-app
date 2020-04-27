import React from 'react';
import "./estilo.css";

const Header = () => {
 
 return (<div class="menu">
   <div class="header">
   <img src={require("../../img/logo.svg")} />
  <div class="header-right">
    <a href="#">Gorilando</a>
    <a href="#">Guia Gorila</a>
    <a href="#">GorilaPRO</a>
    <button class="btn">Login</button>
  </div>
</div> 
</div>
 )
}
export default Header;