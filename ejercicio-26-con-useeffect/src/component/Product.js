import React from "react";

export default function Product({ product, onAddToCart }) {
  return (
    <div className="boxProduct">

      <div className="boxProduct__product">
      <div className="boxProduct__img">
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className="boxProduct__name">{product.name}</div>
      <button onClick={() => onAddToCart(product)} className="boxProduct__button">Añadir al carrito</button>
      </div>
      
    </div>
  );
}
