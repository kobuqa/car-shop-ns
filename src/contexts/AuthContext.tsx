import React, { useContext, useState } from 'react';
import axios from 'axios';
import { API, URLS } from '../api/urls';
import { ERROR_MESSAGES } from '../utils/messages';

export interface IAuthContext {
  signin?: (email: string, password: string) => void;
  signup?: (email: string, password: string) => void;
  logout?: () => void;
  token?: string;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = React.createContext<IAuthContext>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>('');
  const [error, setError] = useState<string>('');

  const signup = (email: string, password: string) => {
    axios
      .post(`${API}${URLS.SIGN_UP}`, {
        email,
        password,
      })
      .catch(() => setError(ERROR_MESSAGES.SIGN_UP));
  };

  const signin = (email: string, password: string) => {
    axios
      .post(`${API}${URLS.SIGN_IN}`, {
        email,
        password,
      })
      .then((result) => console.log('success:', result))
      .catch(() => setError(ERROR_MESSAGES.SIGN_IN));
  };

  const logout = () => {
    axios.post(`${API}${URLS.LOG_OUT}`).catch(() => {
      setError(ERROR_MESSAGES.LOG_OUT);
    });
  };

  const value: IAuthContext = {
    signin,
    signup,
    logout,
    token,
    error,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
