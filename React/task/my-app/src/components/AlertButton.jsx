import React from "react";
import styles from "../styles/AlertButton.module.css";

const AlertButton = ({ message }) => {
  return (
    <button className={styles.button} onClick={() => alert(message)}>
      Show Alert
    </button>
  );
};

export default AlertButton;
