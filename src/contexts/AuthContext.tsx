import axios from 'axios';
import React, { useContext, useState } from 'react';
import { API, URLS } from '../api/urls';

export interface IAuthContext {
  signin?: any;
  signup?: any;
  logout?: any;
  currentUser?: string;
}

const AuthContext = React.createContext<IAuthContext>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string>('');

  const signup = (email: string, password: string) => {
    axios.post(`${API}${URLS.SIGN_UP}`, {
      email,
      password,
    });
  };

  const signin = (email: string, password: string) => {
    axios
      .post(`${API}${URLS.SIGN_IN}`, {
        email,
        password,
      })
      .then((result) => console.log('success:', result))
      .catch((error) => console.log('error:', error));
  };

  const logout = () => {
    axios.post(`${API}${URLS.LOG_OUT}`);
  };

  const value: IAuthContext = {
    signin,
    signup,
    logout,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
