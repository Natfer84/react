import React, { useState } from "react";

export default function Caps() {
  
  const [cart, setCart] = useState([]);

  const caps = [
    { id: 1, name: "Bulbasaur", price: "10€", image: "/images/bulbasur.jpg" },
    {
      id: 2,
      name: "Charmander",
      price: "20€",
      image: "/images/Charmander.jpg",
    },
    { id: 3, name: "Gengar", price: "30€", image: "/images/gorra-gengar.jpg" },
    { id: 4, name: "Pikachu", price: "50€", image: "/images/pikachu.jpg" },
  ];

  const handleAddToCartCaps = (cap) => {
    setCart([...cart, cap]);
  };

  return (
    <div className="boxCaps">
      <h1>Gorras</h1>
      <div className="product-caps">
        {caps.map((cap) => (
          <div key={cap.id} className="product-Caps">
            <img src={cap.image} alt={cap.name} className="product-image" />
            <h2>{cap.name}</h2>
            <p>{cap.price}</p>
            <button onClick={() => handleAddToCartCaps(cap)}>
              Añadir a Pokebola
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
