import React from 'react';


import styles from '../styles/mystyle.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li className={styles.navLinks}>Home</li>
        <li className={styles.navLinks}>About</li>
        <li>Products</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

export default Nav;
