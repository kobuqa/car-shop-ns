import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API, URLS } from '../api/urls';

export interface IAuthContext {
  signin?: any;
  signup?: any;
  logout?: any;
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
      .catch(() => setError('Failed to sign up'));
  };

  const signin = (email: string, password: string) => {
    axios
      .post(`${API}${URLS.SIGN_IN}`, {
        email,
        password,
      })
      .then((result) => console.log('success:', result))
      .catch(() => setError('Failed to sign in'));
  };

  const logout = () => {
    axios.post(`${API}${URLS.LOG_OUT}`).catch(() => {
      setError('Failed to logout');
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
