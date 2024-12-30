import React from "react";
import NavBar from "./NavBar"





export default function Header() {
  return (
    <div className="boxHeader">
      <div className="boxHeader__div__img">
      <img src="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/mkrauslhughhtnvnvfcw" alt="pokemon"></img>
      </div>
      <div className="boxHeader__div__h1__nav">
        <h1 className="boxHeader__h1">Pokemanía
        </h1>
        <NavBar />
      </div>
    </div>
  )
}