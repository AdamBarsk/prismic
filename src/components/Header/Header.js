import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/svedea_logo_minify.svg';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};
