import React from 'react';

import styles from '../styles/mystyle.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className = {sty}>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

export default Nav;
