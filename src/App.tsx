import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Router from './router/Router';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
