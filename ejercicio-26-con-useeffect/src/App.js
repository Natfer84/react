import FetchData from './page/FetchData';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header.js';


function App() {

  return (

      <Router>
        <Header />
        <Routes>
          <Route path="/product" element={<FetchData />} />
        </Routes>
      </Router>

  );
}

export default App;
