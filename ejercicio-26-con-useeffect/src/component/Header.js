import React from "react";
import NavBar from "./NavBar";
import "../styles/header-nav.css";

export default function Header() {
  return (
    <div className="boxHeader">
      <div className="boxHeader__div__img">
        <img
          src="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/mkrauslhughhtnvnvfcw"
          alt="pokemon"
        ></img>
      </div>
      <div className="boxHederContainer__img2__p">
      <div className="boxHeader__div__img2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Gf7080diltMSlcLy9kPIeRAC60slkt3YWhwQ_tJxJYG3aKpBN89YbD56MPHAZJX2OK4&usqp=CAU"
          alt="pikachu"
        ></img>
        </div>
        <div className="boxHeader__div__img2__p">
          <h3>Descubre la Tienda Pokémon en España</h3>
          <p>Bienvenido a Tienda-Pokemon.es, la tienda 100% Pokémon de España y
          LATAM. Como entusiastas de Pokémon, hemos seleccionado para ti los
          mejores productos Pokémon de las diferentes temporadas: Disfraces,
          Camisetas, Sudaderas, Peluches, Figuritas, Bolsos... Hay para todos
          los gustos. Desde Pokémon de la primera generación hasta Pokémon
          Escarlata y Púrpura de la novena generación, ¡encuentra lo que buscas
          en la Tienda Pokémon y vive al máximo tu pasión! Nuestra tienda online
          ofrece artículos de calidad para fans de todas las edades. Únete a
          nuestra comunidad de entusiastas y colecciona accesorios raros y
          exclusivos. No te pierdas nuestras ofertas especiales y nuevos
          productos en la Tienda Pokémon. La Tienda Pokémon, como si de un
          Pokémon Center se tratara, ofrece tanto a adultos como a niños
          artículos Pokémon de calidad: camisetas, sudaderas, zapatillas,
          disfraces, sombreros, lámparas 3D, peluches... Tanto si eres un fan de
          la primera generación Pokémon como de las generaciones más recientes,
          ¡hay algo para todos!
        </p>
        </div>
     </div>
      <div className="boxHeader__div__h1__nav">
        <h1 className="boxHeader__h1">Pokemanía</h1>
        <NavBar />
      </div>
    </div>
  );
}
