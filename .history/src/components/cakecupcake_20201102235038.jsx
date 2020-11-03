import React from 'react';
import SingleElement from './singleElement';
import ReadImages from './ReadImages';

import styles from '../styles/mystyle.module.css';


function CakeCupCake() {
  return (
    <div>
      <h1 className={styles.bigBlue}>CupCakes</h1>
      <SingleElement />
      <ReadImages
    </div>
  );
}

export default CakeCupCake;
