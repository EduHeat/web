import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { LOGO } from '../consts/college';
import { login } from '../lib/api';
import { loginValidation } from '../lib/validation';
import styles from '../styles/Auth.module.scss';

const Login = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={loginValidation}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const res = await login(values);
        if (res.status !== 200) {
          setErrors({ email: res.statusText, password: res.statusText });
          setSubmitting(false);
          return;
        }
        // successful login, do something
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formStyles}>
          <h2>Login | {LOGO}</h2>
          <div className={styles.innerForm}>
            <Field
              type="email"
              name="email"
              placeholder="email"
              className={styles.inputBox}
            />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            />
            <Field
              type="password"
              placeholder="password"
              className={styles.inputBox}
              name="password"
            />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            />
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
};

export default Login;
