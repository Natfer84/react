import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import FetchData from './page/FetchData_';
import Car from "./component/Car"
import './App.css';





function App() {
   // Estado para el carrito
   const [cart, setCart] = useState([]);
     // Función para añadir productos al carrito
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/product" element={<FetchData onAddToCart={handleAddToCart} />} />
        <Route path="/car" element={<Car pokemonList={cart} />} />
      </Routes>
    </Router>

  );
}

export default App;
