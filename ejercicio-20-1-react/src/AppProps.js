import React from 'react';
import './App.css';
import Cabecera from './componentes/cabecera.js';
import Formulario from './componentes/formulario.js';
import Descripcion from './componentes/descripcion.js';
import RecibirInf from './componentes/recibir-inform.js';
import BotonEnviar from './componentes/boton-enviar.js';



function AppProps() {
  return (
    <div className="App">
      <header>
        <Cabecera 
        titulo="Formulario con Props"/>
      </header>
      <Formulario />
      <footer>
        <Descripcion /> 
        <br></br> 
        <br></br>
        <RecibirInf />
        <br></br> 
        <br></br>
        <BotonEnviar />
      </footer>
    </div>
  );
}

export default AppProps;
