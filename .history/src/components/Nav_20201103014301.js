import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/mystyle.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
      
      <Lin to= "/home"><li className={styles.navLinks}>Home</li>
        <Link to= "/about"><li className={styles.navLinks}>About</li></Link>
        <Link to= "/products"></Link><li>Products</li></Lin
        <Link to= "/contacts"></Link><li>Contacts</li>
      </ul>
    </nav>
  );
}

export default Nav;
