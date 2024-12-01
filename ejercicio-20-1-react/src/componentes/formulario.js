import React from "react";
import Cabecera from "./cabecera.js";
import Label from "./label.js";
import Label2 from "./label2.js";
import Input from "./input.js";
import InputRadio from "./input-radio.js";
import Correo from "./correo.js";
import Poblacion from "./poblacion.js";
import Descripcion from "./descripcion.js";
import RecibirInf from "./recibir-inform.js";
import CondicionesGen from "./condicionesGen.js";
import BotonEnviar from "./boton-enviar.js";

export default function Formulario() {
  return (
    <form>
      <Cabecera />
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
      <RecibirInf />
      <br></br>
      <br></br>
      <CondicionesGen />
      <br></br>
      <br></br>
      <BotonEnviar />
    </form>
  );
  
}
console.log(Formulario);