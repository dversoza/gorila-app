import React from "react";
import './estilo.css';

const login = () => {

    return(
            <div>
                <form class="login">
                    <p>Usuario: </p>
                        <input type="text" id="user" name="user"></input>
                    <p>Senha: </p>
                        <input type="password" id="pass" name="pass"></input>
                    <p id="btn">Entrar</p>
                </form>
            </div>
    )
};

export default login;