import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/mystyle.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
      
      <Link to= "/home"><li className={styles.navLinks}>Home</li></Link>
        <Link to= "/about"><li className={styles.navLinks}>About</li></Link>
        <Link to= "/products"></Link><li>Products</li></Link>
        <Link to= "/contacts"></Link><li>Contacts</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
