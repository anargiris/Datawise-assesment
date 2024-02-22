import React, { useState } from "react";
import styles from "./NewsletterButton.module.css";
import { validateEmail } from "../../lib/utils";

const NewsletterButton = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.newsletterForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Type your email here"
          value={email}
          onChange={handleInputChange}
          className={styles.emailInput}
        />
        <button
          disabled={!validateEmail(email)}
          type="submit"
          className={styles.submitButton}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default NewsletterButton;
