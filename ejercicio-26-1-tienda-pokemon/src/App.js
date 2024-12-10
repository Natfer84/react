
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Conocenos from "./pages/conocenos";
import CarritoP from "./pages/CarritoP";




function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/products" element={<ProductList cart={cart} setCart={setCart} />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/CarritoP" element={<CarritoP cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;