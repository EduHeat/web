import Link from "next/link";
import React, { FC } from "react";
import subjects from "../../lib/subjects";
import years from "../../lib/years";
import styles from './Auth.module.scss'

interface AuthProps {
  isRegister?: boolean
}

const Auth: FC<AuthProps> = ({ isRegister }) => {
  if (isRegister) {
    return (
      <form className={styles.formStyles}>
        <h2>Register | EduPortal-CET</h2>
        <div className={styles.innerForm}>
          <input type="text" placeholder="name" className={styles.inputBox} />
          <input type="email" placeholder="email" className={styles.inputBox} />
          <input type="password" placeholder="password" className={styles.inputBox} />
          <input type="password" placeholder="confirm password" className={styles.inputBox} />
          <input type="number" placeholder="registration number" className={styles.inputBox} />
          <select name="year" className={styles.selectBox}>
            <option value="none" selected disabled hidden>Year</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select name="branch" className={styles.selectBox}>
            <option value="none" selected disabled hidden>Branch</option>
            {subjects.map(sub => <option key={sub.id} value={sub.title}>{sub.title}</option>)}
          </select>
          <p>Already have an account? <Link href="/login">Login</Link></p>
          <button type="submit" className={styles.submitBtn}>Register</button>
        </div>
      </form>
    );
  } else {
    return (
      <form className={styles.formStyles}>
        <h2>Login | EduPortal-CET</h2>
        <div className={styles.innerForm}>
        <input type="email" placeholder="email" className={styles.inputBox} />
          <input type="password" placeholder="password" className={styles.inputBox} />
          <p>Don&apos;t have an account yet? <Link href="/register">Register</Link></p>
          <button type="submit" className={styles.submitBtn}>Login</button>
        </div>
      </form>
    );
  }
};

export default Auth;
