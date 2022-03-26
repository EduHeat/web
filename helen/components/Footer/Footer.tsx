import React from 'react';
import styles from './Footer.module.scss';
import { LOGO } from '../../consts/college';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &#169;{new Date().getFullYear()} {LOGO} | OSS
      </p>
    </footer>
  );
};

export default Footer;
