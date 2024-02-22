import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>COINCASH</div>
      <div className={styles.mobileMenu}>
        <button
          className={`${styles.hamburger} ${
            isOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleNav}
        >
          <span className={styles.hamburgerLines}></span>
          <span className={styles.hamburgerLines}></span>
          <span className={styles.hamburgerLines}></span>
        </button>
        <div
          className={`${styles.navLinksMobile} ${isOpen ? styles.showNav : ""}`}
        >
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#get-the-app" className={styles.appLink}>
            Get the app
          </a>
        </div>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.showNav : ""}`}>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#get-the-app" className={styles.appLink}>
          Get the app
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
