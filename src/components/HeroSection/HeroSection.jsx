import React from "react";
import styles from "./HeroSection.module.css";
import Navbar from "../Navbar/Navbar";
import HeroSectionImage from "../HeroSectionImage/HeroSectionImage";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <header className={styles.mainContentContainer}>
        <Navbar />
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            <h1>
              You can buy anything <br /> with{" "}
              <span className={styles.brandText}>COINCASH</span>
            </h1>
            <p>
              The easiest way to use your cryptocurrencies for everyday
              purchases.
            </p>
            <div>
              <button className={styles.ctaButtonDesktop}>
                Download now for free
              </button>
            </div>
            <button className={styles.ctaButtonMobile}>Get the app</button>
          </div>
          <HeroSectionImage />
        </div>
      </header>

      <div className={styles.infoSection}>
        <p>over 200,000+ users have chosen COINCASH for everyday payments</p>
      </div>
    </div>
  );
};

export default HeroSection;
