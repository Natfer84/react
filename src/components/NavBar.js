import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../hojas-de-estilo/ContaineNav.css";

export default function NavBar() {
  return (
    <nav className="containeNav">
      <div className="containeNav__header">
      <Header />
      </div>
      <div className="containeNav__div--UL">
      <ul className="containeNav__Ul">
        <li className="containeNav__Ul--Li">
          <Link to="/">Inicio</Link>
        </li >
        <li className="containeNav__Ul--Li">
          <Link to="/about">Conócenos</Link>
        </li>
        <li className="containeNav__Ul--Li">
          <Link to="/products">Productos</Link>
        </li>
        <li className="containeNav__Ul--Li">
          <Link to="/carrito">Carrito</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}