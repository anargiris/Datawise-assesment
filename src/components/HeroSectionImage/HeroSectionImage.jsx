import React from "react";
import ellipse1 from "../../assets/ellipse1.png";
import ellipse2 from "../../assets/ellipse2.png";
import iphone from "../../assets/iphone.png";
import styles from "./HeroSectionImage.module.css";

const HeroSectionImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ellipse2}>
        <img src={ellipse2} alt="Ellipse 2" />
      </div>
      <div className={styles.ellipse1}>
        <img src={ellipse1} alt="Ellipse 1" />
      </div>
      <div className={styles.iphone}>
        <img src={iphone} alt="iPhone" />
      </div>
    </div>
  );
};

export default HeroSectionImage;
