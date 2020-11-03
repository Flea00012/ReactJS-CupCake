import React from 'react';

import styles from '../styles/mystyle.module.css';
import cupcake from '../Images/cupcakes/ccBirthday.jpeg'

function CakeCupCake() {
  return (
    <div>
      <h1 className={styles.bigBlue}>CupCakes</h1>
      <img
        src={(cupcake)}
        alt="birthday cupcake"
      height= '300px' width= '300px'/>
    </div>
  );
}

export default CakeCupCake;
