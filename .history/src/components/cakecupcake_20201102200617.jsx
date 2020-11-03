import React from 'react';

import styles from '../styles/mystyle.module.css';

function CakeCupCake() {
  return (
    <div>
      <h1 className={styles.bigBlue}>CupCakes</h1>
      <img src={require('../../Images/')}/>
    </div>
  );
}

export default CakeCupCake;
