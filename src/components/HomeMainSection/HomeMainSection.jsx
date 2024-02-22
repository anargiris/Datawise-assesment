import React from "react";
import styles from "./HomeMainSection.module.css";
import FeaturesList from "../FeaturesList/FeaturesList";
import PaymentFeatures from "../PaymentFeatures/PaymentFeatures";

const HomeMainSection = () => {
  return (
    <main>
      <section className={styles.headingTextSection}>
        <h2>Buy anything you ever imagine</h2>
        <p>
          The easiest way to use your cryptocurrencies for everyday purchases.{" "}
        </p>
      </section>
      <section>
        <FeaturesList />
      </section>
      <section>
        <PaymentFeatures />
      </section>
    </main>
  );
};

export default HomeMainSection;
