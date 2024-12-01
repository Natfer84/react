import React from "react";
import Label from "./label.js";
import Label2 from "./label2.js";
import Input from "./input.js";
import InputRadio from "./input-radio.js";
import Correo from "./correo.js";
import Poblacion from "./poblacion.js";
import Descripcion from "./descripcion.js";


export default function Formulario() {
  return (
    <form>
      <Label />
      <Input />
      <br></br>
      <br></br>
      <Label2 />
      <Input />
      <br></br>
      <br></br>
      <InputRadio />
      <br></br>
      <br></br>
      <Correo />
      <br></br>
      <br></br>
      <Poblacion />
      <br></br>
      <br></br>
      <Descripcion />
      <br></br>
      <br></br>
    </form>
  );
  
}
console.log(Formulario);