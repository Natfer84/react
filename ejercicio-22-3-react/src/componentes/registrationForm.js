import React, { useState } from 'react';
import "../hoja-de-estilos/registrationForm.css";

const RegistrationForm = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const cambioTexto = (event) => {
    setNombre(event.target.value);
  };
  const cambioTexto2 = (event) => {
    setApellido(event.target.value);
  };


  return (
    <div className='contenedor-form'>

      <div className='contenedor-nombre'>
      <label type="text" name="nombre">{props.nombre}</label>
      <input type="text" value={nombre} onChange={cambioTexto} />
      <p>Tu nombre: {nombre}</p>
      </div>

      <div className='contenedor-correo'>
      <label type="text" name="correo">{props.correo}</label>
      <input type="text" value={apellido} onChange={cambioTexto2} />
      <p>Tu correo: {apellido}</p>
      </div>


    </div>

  );
};

export default RegistrationForm;


