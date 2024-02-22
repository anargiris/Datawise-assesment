import React from "react";
import styles from "./Footer.module.css";
import NewsletterButton from "../NewsletterButton/NewsletterButton";

const Footer = () => {
  return (
    <footer>
      <h5 className={styles.footerHeaderText}>
        Get started <span className={styles.textHighlight}>today</span>
      </h5>
      <p className={styles.footerParagraph}>
        Sing up to receive email updates on new products announcements, special
        promotions sales an more.
      </p>
      <NewsletterButton />
      <div className={styles.footerLinks}>
        <h6>COINCASH</h6>
        <ul className={styles.footerLinksList}>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms-and-conditions">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
