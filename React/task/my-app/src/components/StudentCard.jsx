import React from "react";
import AlertButton from "./AlertButton";
import styles from "../styles/StudentCard.module.css";

const StudentCard = ({ name, grade }) => {
  const badgeText = grade >= 85 ? "Excellent Student" : "Needs Improvement";
  const badgeClass = grade >= 85 ? styles.excellent : styles.needs;

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.grade}>Grade: {grade}</p>
      <span className={`${styles.badge} ${badgeClass}`}>{badgeText}</span>
      <div className={styles.buttonWrapper}>
        <AlertButton message={`Student: ${name} — Grade: ${grade}`} />
      </div>
    </div>
  );
};

export default StudentCard;
