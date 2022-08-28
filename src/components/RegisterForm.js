import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { formInputs, validateInput } from '../common/handlers';
import { UserAuth } from '../context/AuthContext';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); //tutorial
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  //   const [registerInformation, setRegisterInformation] = useState({
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //   });
  const [registerFormInputs, setRegisterFormInputs] = useState(formInputs);
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const registerHandler = async e => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/homepage');
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <section className="Auth-form-container">
      <form className="Auth-form" onSubmit={registerHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>{registerFormInputs.email.title}</label>
            <input
              type="email"
              name="email"
              defaultValue={registerFormInputs.email.value}
              placeholder="Enter email"
              ref={emailRef}
              className={`form-control mt-1 ${
                registerFormInputs.email.errors.length ? 'is-invalid' : ''
              }`}
              onChange={e => {
                setEmail(e.target.value);
              }}
              onBlur={e => {
                validateInput(emailRef.current, formInputs);
                setRegisterFormInputs({ ...registerFormInputs });
              }}
            />
            {formInputs.email.errors.map((error, index) => (
              <div className="invalid-feedback" key={index}>
                {error}
              </div>
            ))}
          </div>
          <div className="form-group mt-3">
            <label>{registerFormInputs.password.title}</label>
            <input
              type="password"
              name="password"
              defaultValue={registerFormInputs.password.value}
              placeholder="Enter password"
              ref={passwordRef}
              className={`form-control mt-1 ${
                registerFormInputs.password.errors.length ? 'is-invalid' : ''
              }`}
              onChange={e => setPassword(e.target.value)}
              onBlur={e => {
                validateInput(passwordRef.current, registerFormInputs);
                setRegisterFormInputs({ ...registerFormInputs });
              }}
            />
            {registerFormInputs.password.errors.map((error, index) => (
              <div className="invalid-feedback" key={index}>
                {error}
              </div>
            ))}
          </div>
          {/* <div className="form-group mt-3">
        <label>{formInputs.confirmPassword.title}</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter password"
          defaultValue={registerFormInputs.confirmPassword.value}
          ref={confirmPasswordRef}
          className={`form-control mt-1 ${
            registerFormInputs.confirmPassword.errors.length ? 'is-invalid' : ''
          }`}
          onChange={e =>
            setRegisterInformation({
              ...registerInformation,
              confirmPassword: e.target.value,
            })
          }
          onBlur={e => {
            validateInput(confirmPasswordRef.current, registerFormInputs);
            setRegisterFormInputs({ ...registerFormInputs });
          }}
        />
        {formInputs.confirmPassword.errors.map((error, index) => (
          <div className="invalid-feedback" key={index}>
            {error}
          </div>
        ))}
      </div> */}
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center mt-2">
            <Link className="text-right mt-2" to="/welcome/login">
              Go back
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
