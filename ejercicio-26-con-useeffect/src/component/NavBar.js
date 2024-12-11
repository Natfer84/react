import React from "react";
import {link} from "react-router-dom"


export default function NavBar (){
    return(
        <nav className="boxNavBar">
            <ul className="boxNavBar__Ul">
                <li className="boxNavBar__Li">
                    <link to="/">Inicio</link>
                </li>
                <li className="boxNavBar__Li">
                    <link to="/product">Productos</link>
                </li>
                <li className="boxNavBar__Li">
                    <link to="/car">Carrito</link>
                </li>
            </ul>
        </nav>
    )
}