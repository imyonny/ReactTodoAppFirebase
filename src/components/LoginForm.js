import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };

  const signInHandler = e => {
    e.preventDefault();
    console.log('test');
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(() => {
    //     navigate('/homepage');
    //   })
    //   .catch(err => alert(err.message));
  };

  return (
    <section className="Auth-form-container">
      <form className="Auth-form">
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
              onChange={emailChangeHandler}
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
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={signInHandler}>
              Sign In
            </button>
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
