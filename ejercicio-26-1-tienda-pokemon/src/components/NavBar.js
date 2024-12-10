import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBox">
      <ul className="navBox__Ul">
      <li className="navBox__Li">
          <Link to="/products">Productos</Link>
        </li>
        <li className="navBox__Li">
          <Link to="/conocenos">Conócenos</Link>
        </li>

        <li className="navBox__Li">
          <Link to="/carrito">Carrito</Link>
        </li>

        <li className="navBox__Li">
          <Link to="/inicio">Inicio</Link>
        </li>

      </ul>
    </nav>
  );
}