
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Conocenos from "./pages/conocenos";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/conocenos" element={<Conocenos />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;