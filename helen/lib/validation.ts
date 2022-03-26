import { Login, Register } from './types';

export const loginValidation = (values: Login) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const registerValidation = (values: Register) => {
  const errors: any = {};
  if (!values.year) {
    errors.year = 'Required';
  }
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }
  if (!values.registrationNo) {
    errors.registrationNo = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.branch) {
    errors.branch = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
