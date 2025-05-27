import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Plan from './pages/Plan';
import Meals from './pages/Meals';
function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/meals" element={<Meals />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
