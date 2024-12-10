import React from "react";

export default function Carrito({ cart }) {
  if (!cart || cart.length === 0) {
    return (
      <div className="cart">
        <h2>Carrito</h2>
        <p>El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
