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
                    <Link to="/car">
                    <img src="https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png" alt="bola de pokemon" className="boxNavBar__Li__img"></img></Link>
                </li>
            </ul>
        </nav>
    )
}