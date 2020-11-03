import React, { useState } from 'react';

import styles from '../styles/mystyle.module.css';

function CakeCupCake() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> {count}</h1>
    </div>
  );
}

export default CakeCupCake;
