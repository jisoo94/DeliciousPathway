import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Travel from "./pages/Travel";
import Map from "./pages/Map";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/Utils/ScrollToTopButton";

// export const infoStateContext = React.createContext();
function App() {
  return (
    // <infoStateContext.Provider value={""}>
    <BrowserRouter>
      <div className="container_box">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/map" element={<Map />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div className="topButton">
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
    // </infoStateContext.Provider>
  );
}

export default App;
