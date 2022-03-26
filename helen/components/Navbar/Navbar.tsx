import Link from 'next/link';
import React from 'react';
import { LOGO } from '../../consts/college';
import { Button } from '../UI';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.logo}>
          <Link href="/">{LOGO}</Link>
          <p>&nbsp;</p>
        </h1>
      </div>
      <div className={styles.links}>
        <Button>
          <Link href={'/login'}>LOGIN</Link>
        </Button>
        <Button>
          <Link href={'/register'}>REGISTER</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
