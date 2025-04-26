import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import Projects from "./components/Projects";
import Resume from "./PAGES/Resume";
import Contact from "./PAGES/Contact";
import Navbar from "./components/Navbar"; // 👈 חדש
import ScrollToTop from "./components/ScrollToTop"; // 👈 ייבוא הקובץ

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 מוסיף גלילה למעלה בכל מעבר דף */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
