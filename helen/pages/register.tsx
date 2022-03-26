import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { LOGO } from '../consts/college';
import subjects, { Subject } from '../consts/subjects';
import years, { Year } from '../consts/years';
import { register } from '../lib/api';
import { registerValidation } from '../lib/validation';
import styles from '../styles/Auth.module.scss';

const Register = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        // @ts-ignore
        registrationNo: '',
        year: Year.FirstYear,
        branch: Subject.CSE,
      }}
      validate={registerValidation}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const res = await register(values);
        if (res.status !== 200) {
          setErrors({ email: res.statusText, password: res.statusText });
          setSubmitting(false);
          return;
        }
        // successful register, do something
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formStyles}>
          <h2>Register | {LOGO}</h2>
          <div className={styles.innerForm}>
            <Field
              type="text"
              placeholder="name"
              name="name"
              className={styles.inputBox}
            />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
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
              component="div"
            />
            <Field
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              className={styles.inputBox}
            />
            <ErrorMessage
              className={styles.error}
              name="confirmPassword"
              component="div"
            />
            <Field
              type="number"
              name="registrationNo"
              placeholder="registration number"
              className={styles.inputBox}
            />
            <ErrorMessage
              className={styles.error}
              name="registrationNo"
              component="div"
            />
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
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
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
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
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
};

export default Register;
