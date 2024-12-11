import React from "react";
import { Link } from "react-router-dom"


export default function NavBar (){
    return(
        <nav className="boxNavBar">
            <ul className="boxNavBar__Ul">
                <li className="boxNavBar__Li">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="boxNavBar__Li">
                    <Link to="/product">Productos</Link>
                </li>
                <li className="boxNavBar__Li">
                    <Link to="/car">Carrito</Link>
                </li>
            </ul>
        </nav>
    )
}