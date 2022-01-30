import Link from 'next/link';
import React from 'react';
import { Button } from '../UI';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return <div className={styles.container}>
    <div>
      <h1 className={styles.logo}>
        <Link href='/'>EduPortal-CET</Link>
        <p>&nbsp;</p>
      </h1>
    </div>
    <div className={styles.links}>
      <Button as='a' href='/login'>LOGIN</Button>
      <Button as='a' href='/register'>REGISTER</Button>
      <Button as='a' href='/forums'>FORUMS</Button>
    </div>
  </div>;
};

export default Navbar;
