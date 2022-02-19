import { createContext } from 'react';

interface UserCtxInterface {
  user: {
    _id: string;
    name: string;
    email: string;
    branch: string;
    year: string;
    regNo: number;
    avatarLink: string;
  }
}

export const UserContext = createContext<UserCtxInterface | null>(null);
