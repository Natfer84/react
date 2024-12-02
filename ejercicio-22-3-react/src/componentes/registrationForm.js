import React, { useState } from 'react';

const RegistrationForm = () => {
  const [text, setText] = useState('');

  const cambioTexto = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={cambioTexto} />
      <p>Tú nombre: {text}</p>
    </div>
  );
};

export default RegistrationForm;


