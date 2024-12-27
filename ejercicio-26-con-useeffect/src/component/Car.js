import React from "react";

export default function Carrito({ pokemonList }) {
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className="boxCart_Carrito_Vacio">
        <h2>Carrito</h2>
        <p>El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="boxCart_Carrito">
      <h2>Carrito</h2>
      <div className="boxCart_Carrito__Datos">
        {pokemonList.map((product, index) => (
          <div key={product} className="boxCart_Carrito__Datos_producto">
            <div className="boxCart_Carrito__Datos__image">
              <img src={product.image}></img>
            </div>
            <div className="boxCart_Carrito__Datos__name">
              {product.name}
            </div>
            <div className="boxCart_Carrito__Datos__name">
              {product.price}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
