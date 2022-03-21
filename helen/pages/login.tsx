import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { login } from '../lib/api';
import styles from '../styles/Auth.module.scss';

const Login = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: any = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const res = await login(values.email, values.password);
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
          <h2>Login | EduPortal-CET</h2>
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
};

export default Login;
