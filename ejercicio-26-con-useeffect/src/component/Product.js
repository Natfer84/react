import React from "react";

export default function Product({ product, onAddToCart }) {
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name}></img>
      </div>
      <div>{product.name}</div>
      <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
    </div>
  );
}
