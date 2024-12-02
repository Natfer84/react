import React from "react";
import Label from "./label.js";
import Label2 from "./label2.js";
import Input from "./input.js";
import InputRadio from "./input-radio.js";
import Correo from "./correo.js";
import Poblacion from "./poblacion.js";



export default function Formulario() {
  return (
    <form>
      <Label name="Nombre: "/>
      <Input />
      <br></br>
      <br></br>
      <Label2 apellido="Apellido: " />
      <Input />
      <br></br>
      <br></br>
      <InputRadio 
      sexo="Mujer "
      sexo2="Hombre "
      />
      <br></br>
      <br></br>
      <Correo />
      <br></br>
      <br></br>
      <Poblacion 
      poblacion="Población: "
      ciudad1="Alicante"
      ciudad2="Madrid"
      ciudad3="Barcelona" 
      ciudad4="Badajoz" />
      <br></br>
      <br></br>
     
    </form>
  );
  
}
console.log(Formulario);