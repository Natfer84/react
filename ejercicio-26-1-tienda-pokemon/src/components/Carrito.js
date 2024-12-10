import React from "react";

export default function Carrito({ cart }) {
  if (!cart || cart.length === 0) {
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
        {cart.map((item, index) => (
          <div key={index} className="boxCart_Carrito__Datos_producto">
            <div className="boxCart_Carrito__Datos__image">
              <img src={item.image}></img>
            </div>
            <div className="boxCart_Carrito__Datos__name">
              {item.name}
            </div>
            <div className="boxCart_Carrito__Datos__price">
              {item.price}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
