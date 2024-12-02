import React, { useState } from 'react';
import "../hoja-de-estilos/registrationForm.css";

const RegistrationForm = (props) => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const cambioTexto = (event) => {
    setText(event.target.value);
  };
  const cambioTexto2 = (event) => {
    setText2(event.target.value);
  };


  return (
    <div className='contenedor-form'>

      <div className='contenedor-nombre'>
      <label type="text" name="nombre">{props.nombre}</label>
      <input type="text" value={text} onChange={cambioTexto} />
      <p>Tu nombre: {text}</p>
      </div>

      <div className='contenedor-correo'>
      <label type="text" name="correo">{props.correo}</label>
      <input type="text" value={text2} onChange={cambioTexto2} />
      <p>Tu correo: {text2}</p>
      </div>


    </div>

  );
};

export default RegistrationForm;


