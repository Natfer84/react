import React, { useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../components/Product";

// Componente principal que maneja la lista de productos y el carrito
export default function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Producto 1", price: "$10", image: "/image/Bulbasaur.jpg" },
    { id: 2, name: "Producto 2", price: "$20", image: "/image/charmander.jpg" },
    { id: 3, name: "Producto 3", price: "$30", image: "/image/Cyndaquil.jpg" },
    { id: 4, name: "Producto 4", price: "$40", image: "/image/Frozen.jpg" },
    { id: 5, name: "Producto 5", price: "$50", image: "/image/Pikachu.jpg" },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
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