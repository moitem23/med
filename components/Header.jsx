"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Mobile Logo Only */}
        <a href="/" className="site-logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Scottsdale Medical Stays"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/" className={pathname === "/" ? "active" : ""}>HOME</a>
          <a href="#properties">OUR PROPERTIES</a>
          <a href="#medical-stays">MEDICAL STAYS</a>
          <a href="/about-us" className={pathname === "/about-us" ? "active" : ""}>ABOUT US</a>
          <a href="#reviews">GUEST REVIEWS</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="header-cta">
          BOOK YOUR STAY
          <span>›</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>

        <a href="/" onClick={closeMenu}>
          HOME
        </a>

        <a href="#properties" onClick={closeMenu}>
          OUR PROPERTIES
        </a>

        <a href="#medical-stays" onClick={closeMenu}>
          MEDICAL STAYS
        </a>

        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="#reviews" onClick={closeMenu}>
          GUEST REVIEWS
        </a>

        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>

        <a
          href="#contact"
          className="mobile-book-button"
          onClick={closeMenu}
        >
          BOOK YOUR STAY
          <span>›</span>
        </a>

      </div>
    </header>
  );
}