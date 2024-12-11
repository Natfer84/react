import React from "react";
import NavBar from "./component/NavBar"

export default function Header() {
  return (
    <div className="boxHeader">
      <h1 className="boxHeader__h1">Pokemanía</h1>
      <div>
        <NavBar />
      </div>
      

    </div>
  )
}