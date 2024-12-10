import React, { useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../components/Product";



// Componente principal que maneja la lista de productos y el carrito
export default function ProductList({cart, setCart}) {
  

  const products = [
    { id: 1, name: "Bulbasaur", price: "10€", image: "/image/Bulbasaur.jpg" },
    { id: 2, name: "Charmander", price: "20€", image: "/image/charmander.jpg" },
    { id: 3, name: "Cyndaquil", price: "30€", image: "/image/Cyndaquil.jpg" },
    { id: 4, name: "Frozen", price: "40€", image: "/image/Frozen.jpg" },
    { id: 5, name: "Pikachu", price: "50€", image: "/image/Pikachu.jpg" },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  

  return (
    <div className="boxProductos">
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

    </div>
  );
}