import React from "react";
import Carrito from "../components/Carrito";

export default function CarritoP({cart}) {
  return (
    <div className="cart">
      <Carrito cart={cart}/>
    </div>
  );
}
