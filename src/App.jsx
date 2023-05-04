import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Nav/Navbar";
import SectionWeather from "./Pages/SectionWeather";
import ContextProvider from "./context/Context";
import "./styles/global/colors.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/section-weather" element={<SectionWeather />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
