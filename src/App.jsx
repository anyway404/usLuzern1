import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Kontakt from "./pages/Kontakt";
import Shop from "./pages/Shop";
import LoginPage from "./pages/LoginPage";
import Partner from "./pages/Partner";
import Warenkorb from "./pages/Warenkorb";
import ProductSite from "./pages/ProductSite";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/warenkorb" element={<Warenkorb />} />
        <Route path="/productsite" element={<ProductSite />} />
      </Routes>
    </Router>
  );
}

export default App;
