import { Subject } from '../consts/subjects';
import { Year } from '../consts/years';

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  registrationNo: number;
  year: Year;
  branch: Subject;
};
