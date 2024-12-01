import React from 'react';
import './App.css';
import Cabecera from './componentes/cabecera.js';
import Formulario from './componentes/formulario.js';
import RecibirInf from './componentes/recibir-inform.js';
import Descripcion from './componentes/descripcion.js';
import BotonEnviar from './componentes/boton-enviar.js';



function App() {
  return (
    <div className="App">
      <header>
        <Cabecera />
      </header>
      <Formulario />
      <footer>
        <RecibirInf />
        <Descripcion />
        <BotonEnviar />
      </footer>
    </div>
  );
}

export default App;
