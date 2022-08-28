import React from 'react';
import { Route, Routes } from 'react-router';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Welcome = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default Welcome;
