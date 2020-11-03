import React from 'react';

import styles from '../styles/mystyle.module.css';
import cupcake from 

function CakeCupCake() {
  return (
    <div>
      <h1 className={styles.bigBlue}>CupCakes</h1>
      <img
        src={require('../Images/cupcakes/ccBirthday.jpeg')}
        alt="birthday cupcake"
      />
    </div>
  );
}

export default CakeCupCake;
