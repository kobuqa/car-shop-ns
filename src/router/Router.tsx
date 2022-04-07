import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from '../pages/Auth/Auth';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { ROUTES } from '../utils/routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<Auth type="signup" />} />
        <Route path={ROUTES.SIGN_IN} element={<Auth type="signin" />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
