import React from "react";
import styles from "./FeaturesList.module.css";
import { useState } from "react";
import { useEffect } from "react";

const items = [
  {
    id: 1,
    text: (
      <span style={{ textAlign: "center" }}>
        You can{" "}
        <span className={styles.lineBreak}>
          <br />
        </span>
        <span className={styles.featureTextHighlight}>book</span> tickets
      </span>
    ),
    icon: "/src/assets/icons/vector.png",
  },
  {
    id: 2,
    text: (
      <span style={{ textAlign: "center" }}>
        You can{" "}
        <span className={styles.lineBreak}>
          <br />
        </span>
        <span className={styles.featureTextHighlight}>buy</span> groceries
      </span>
    ),
    icon: "/src/assets/icons/cart.png",
  },
  {
    id: 3,
    text: (
      <span style={{ textAlign: "center" }}>
        You can{" "}
        <span className={styles.lineBreak}>
          <br />
        </span>
        <span className={styles.featureTextHighlight}>pay</span> your bills
      </span>
    ),
    icon: "/src/assets/icons/page.png",
  },
];

const FeaturesList = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fakePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    fakePromise.then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading..</div>
      ) : (
        <ul className={styles.featuresList}>
          {items.map((item) => (
            <li className={styles.listItem} key={item.id}>
              <img src={item.icon} className={styles.listItemIcon} />
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeaturesList;
