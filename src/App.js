import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Favourites from "./routes/Favourites";
import Footer from "./components/Footer";
import Notfound from "./routes/Notfound";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
