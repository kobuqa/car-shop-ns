import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from '../pages/Auth/Auth';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { routes } from '../utils/routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.SIGN_UP} element={<Auth type="signup" />} />
        <Route path={routes.SIGN_IN} element={<Auth type="signin" />} />
        <Route path={routes.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
