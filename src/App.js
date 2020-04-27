import React from 'react';
import Header from './componentes/header';
import './estilo.css';
import Rotas from './Rotas'


function App() {
  return (
    <div className="App">
      <div><Header /></div>
        <div><Rotas /></div>
    </div>
  );
}

export default App;
