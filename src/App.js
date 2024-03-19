import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Travel from "./pages/Travel";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

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
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    // </infoStateContext.Provider>
  );
}

export default App;
