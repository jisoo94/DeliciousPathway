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
      <NavBar />
      <div className="main">
        <h1>home test</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    // </infoStateContext.Provider>
  );
}

export default App;
