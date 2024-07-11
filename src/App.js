import React from "react";
import NavBar from "./components/NavBar"; // Replace with your NavBar component
import TextForm from "./components/TextForm"; // Replace with your TextForm component
import About from "./components/About"; // Import the About component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar title="LuminoText" about="About us" /> 
        <main className="flex-grow">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Elevate Your Text - Simplify, Transform, and Optimize" />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
