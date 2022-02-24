import { createContext } from 'react';

interface AuthCtxInterface {
  refreshToken: string;
  accessToken: string;
}

export const AuthContext = createContext<AuthCtxInterface | null>(null);
