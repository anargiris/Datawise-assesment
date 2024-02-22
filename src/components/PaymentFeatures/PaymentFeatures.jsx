import React from "react";
import styles from "./PaymentFeatures.module.css";

const PaymentFeatures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.card}>
          <div className={styles.flexItemContainer}>
            <img
              src="https://s3-alpha-sig.figma.com/img/3077/9d3b/459ddabf82741459766832b60633e9fc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gXb2NB8ifvl7JGthV4kyecfp4nM8pPNzyiNA~eAYn5Giva9ieYq1W0rgIXlg5MlybjSlVebiZwRuxkcFSl~C~peJxpIusQTnv5Qrca9Iwy10B4kRdT9O~BQ3dYSm4ZpEUamRNJEmi~1PhSw-nU8SwPiYfmwWfEtVOrkaANJgEmYb2NQK26yCCb4fCpFupXo3bNou4b~t3L5PHJ~V-XP0AYXY4Qfp-ZNZpfvuaz7FEQcQ~1xN85x0-CLhMse6iKMf0FEk5ioYxf2fe8s0Uv1aOFI6RUvYw5YKzLqY9VMxYNZBYfRVmkuYfwXBhGdJH4joH-kiA0BHXBuq0YdniBs9~w__"
              alt="Payment Process"
              className={styles.image}
            />
          </div>
          <div className={styles.flexItemContainer}>
            <h3>Shop anywhere</h3>
            <p>
              The easiest way to use your cryptocurrencies for everyday
              purchases.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.card}>
          <div className={styles.flexItemContainer}>
            <h3>Zero fees</h3>
            <p>
              The easiest way to use your cryptocurrencies for everyday
              purchases.
            </p>
          </div>
          <div className={styles.flexItemContainer}>
            <img
              src="https://s3-alpha-sig.figma.com/img/7726/046b/30b31501d21e3eb18a3897416ee563bc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0fvjAMrpRNf5qStMAZjgDiW6P93RNHDRaD-7L70JXmK2kHTUTSu2UKXgsomS85Eny1TZyTEegWLwOh5PjsTsXjJjfIx2P-zti9~~L8T553DLJ3ZUxPQToG-unofNVybL9C9axVwjIFLR1pGQEYszAEvMuWra7gjlfkKpu8ITTR~azroYPGqYHBZHe4DzCQDeMfKcXvR-z9UO~NmqItCpYXpMGaAT7UjUdhllriukppFRiB~I2sUjVYAVJlHn4J9f~O15oeog5zRCUr1Qb1PawihfCI3Sbj-NM26qZ-aFNi8nQmJaiB2qvmxMuk9kM~qDw~jLx8ZDeqv0-l~C2ebfA__"
              alt="Phone with Crypto App"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFeatures;
