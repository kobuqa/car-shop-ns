import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from '../pages/Auth/SignUp';
import { SignIn } from '../pages/Auth/SignIn';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { ROUTES } from '../utils/routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
