import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { FC } from 'react';
import subjects from '../../lib/subjects';
import years from '../../lib/years';
import styles from './Auth.module.scss';

interface AuthProps {
  isRegister?: boolean;
}

const Auth: FC<AuthProps> = ({ isRegister }) => {
  if (isRegister) {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formStyles}>
            <h2>Register | EduPortal-CET</h2>
            <div className={styles.innerForm}>
              <Field
                type="text"
                placeholder="name"
                name="name"
                className={styles.inputBox}
              />
              <ErrorMessage name="name" component="div" />
              <Field
                type="email"
                name="email"
                placeholder="email"
                className={styles.inputBox}
              />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                placeholder="password"
                className={styles.inputBox}
                name="password"
              />
              <ErrorMessage name="password" component="div" />
              <Field
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                className={styles.inputBox}
              />
              <ErrorMessage name="confirmPassword" component="div" />
              <Field
                type="number"
                name="registrationNumber"
                placeholder="registration number"
                className={styles.inputBox}
              />
              <ErrorMessage name="registrationNumber" component="div" />
              <Field as="select" name="year" className={styles.selectBox}>
                <option value="none" selected disabled hidden>
                  Year
                </option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="name" component="div" />
              <Field as="select" name="branch" className={styles.selectBox}>
                <option value="none" selected disabled hidden>
                  Branch
                </option>
                {subjects.map((sub) => (
                  <option key={sub.id} value={sub.title}>
                    {sub.title}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="name" component="div" />
              <p>
                Already have an account? <Link href="/login">Login</Link>
              </p>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  } else {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formStyles}>
            <h2>Register | EduPortal-CET</h2>
            <div className={styles.innerForm}>
              <Field
                type="email"
                name="email"
                placeholder="email"
                className={styles.inputBox}
              />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                placeholder="password"
                className={styles.inputBox}
                name="password"
              />
              <ErrorMessage name="password" component="div" />
              <p>
                Don&apos;t have an account yet?{' '}
                <Link href="/register">Register</Link>
              </p>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
};

export default Auth;
