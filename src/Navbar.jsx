import React, { useState } from 'react';
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to handle menu icon click
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle scrolling
  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">Tidev</div>
      <i className="bx bx-menu-alt-right" id="menu" onClick={handleMenuClick}></i>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#portfolio">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#projects">Timeline</a>
        </li>
        <li>
          <a href="#about">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
