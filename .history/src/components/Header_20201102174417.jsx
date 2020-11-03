import React from 'react';
import styles from '../styles/mystyle.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
    <h1>Header </h1>
      <Link to="/">
        <img src="../../Images/cupcakes/ccBirthday.jpeg" alt="Birthday.jpeg" />
      </Link>
    </div>
  );
}
