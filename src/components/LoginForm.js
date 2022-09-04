import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { auth } from '../firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const signInHandler = async e => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <section className="Auth-form-container">
      <form className="Auth-form" onSubmit={signInHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              className="form-control mt-1"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              className="form-control mt-1"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="text-center mt-2">
            <Link to="/welcome/register" className=" text-right mt-2">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
