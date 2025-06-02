import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = ({ total }) => {
  return <footer className={styles.footer}>Total Students: {total}</footer>;
};

export default Footer;
