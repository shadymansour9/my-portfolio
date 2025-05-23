import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* לוגו מימין */}
      <div className="navbar-logo">shadyweb</div>

      {/* קישורים משמאל */}
      {!isMobile && (
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}

      {/* תפריט המבורגר במובייל */}
      {isMobile && (
        <>
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          {isOpen && (
            <ul className="navbar-links-mobile">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
              <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
