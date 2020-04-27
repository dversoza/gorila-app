import React from 'react';
import './estilo.css';


const inve_display = () => {

    return (<div>
                <div class="card">
                    <img src={require("../../img/img_avatar.png")}  />
                    <h1>Thiago Nigro</h1>
                    <p>Acessor ha 19 anos</p>
                    <p>Especialista em Fundo Multimercado</p>
                    <p>Diversificador de Carteiras</p>
                    <p><button>Saiba Mais</button></p>
                </div>      
            </div>
    )
};

export default inve_display;