import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/mystyle.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <Link to="/home">
          {' '}
          <li>Home</li>{' '}
        </Link>
        <Link to="/about">
          {' '}
          <li>About</li>{' '}
        </Link>
        <Link to="/products">
          {' '}
          <li>Products</li>{' '}
        </Link>
        <Link to="/contact">
          {' '}
          <li>Contacts</li>{' '}
        </Link>
      </ul>
    </nav>
  );
}
