import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/mystyle.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
      
      <Link to= "/home"><li className={styles.navLinks}>Home</li>
        <Link to= "/about"><li className={styles.navLinks}>About</li></Link>
        <Link to= "/P"></Link><li>Products</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

export default Nav;
