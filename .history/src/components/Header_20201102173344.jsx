import React, { useState } from 'react';
import styles from '../styles/mystyle.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [var, setVar] = useState(initialVar);

  return <div className={styles.header}></div>;
}
