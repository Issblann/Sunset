import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Maps from "./Pages/Maps";
import Navbar from "./components/Nav/Navbar";
import SectionWeather from "./Pages/SectionWeather";
import ContextProvider from "./context/Context";
import "./styles/global/colors.css";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path="/section-weather/:city" element={<SectionWeather />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
