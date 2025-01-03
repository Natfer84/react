import React from "react";
import Caps from "./Caps"

export default function Car({ pokemonList, onIncrement, onDecrement, onRemove,handleAddToCartCaps }) {
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className="containerCart">
      <div className="boxCart_Carrito_Vacio">
        <h2>Pokebola</h2>
        <p>La Pokebola está vacía.
          <br></br>
           Igual te interesa alguno de estos articulos.</p>
       </div>
       <div className="containerCart-Caps">
         <Caps /> 
       </div>
   </div>
    );
  }

  return (
    <div className="boxCart_Carrito">
      <h2>Pokebola</h2>
     
      <div className="boxCart_Carrito__Datos">
         {handleAddToCartCaps}
        {pokemonList.map((item, index) => (
          <div key={index} className="boxCart_Carrito__Datos_producto">
            <div className="boxCart_Carrito__Datos__image">
              <img src={item.product.image} alt={item.product.name} />
            </div>
            <div className="boxCart_Carrito__Datos__name">{item.product.name}</div>
            <div className="boxCart_Carrito__Datos__price">{item.product.price}€</div>

            {/* Contador de cantidad */}
            <div className="quantity-controls">
              <button onClick={() => onDecrement(item.product)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onIncrement(item.product)}>+</button>
            </div>

            {/* Botón para eliminar el producto */}
            <button onClick={() => onRemove(item.product)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
