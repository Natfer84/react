import React from "react";
import NavBar from "./NavBar";


export default function Header() {
  return (
    <div className="BoxHeader">
      <div className="BoxHeader__Header">
        <header className="headerTitulo">
          <h1>Tienda Pokemanía</h1>
        </header>
      </div> 
      <div className="BoxHeader__Nav" >
        <NavBar />
      </div>
     
    </div>
  
  );
}