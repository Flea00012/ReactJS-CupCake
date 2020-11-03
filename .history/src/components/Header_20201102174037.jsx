import React from 'react';
import styles from '../styles/mystyle.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src='../'
         
          alt="Logo"
        />
      </Link>
    </div>
  );
}
