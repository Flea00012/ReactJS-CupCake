import React from 'react';
import styles from '../';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="../../Images/cupcakes/ccBirthday.jpeg" alt="Birthday.jpeg" />
      </Link>
    </div>
  );
}
