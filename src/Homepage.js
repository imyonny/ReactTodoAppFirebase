import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserAuth } from './context/AuthContext';
import { auth } from './firebase';

const Homepage = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/');
      }
    });
  }, []);

  return (
    <>
      <div>User Email: {user && user.email}</div>
    </>
  );
};

export default Homepage;
