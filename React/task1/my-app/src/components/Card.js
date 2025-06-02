import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>Learn More</button>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
