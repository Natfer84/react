import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Product />
      <Footer />

    </div>


  )
}

export default App;