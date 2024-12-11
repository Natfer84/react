import React from "react";
import NavBar from "./NavBar"

export default function Header() {
  return (
    <div className="boxHeader">
        <img src="https://media.vandal.net/m/11-2023/9/202311911153562_1.jpg" alt="pokemon"></img>
      <h1 className="boxHeader__h1">Pokemanía</h1>
      <div>
        <NavBar />
      </div>
      
      

    </div>
  )
}