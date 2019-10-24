import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Loader from './Loader';
import Notification from '../components/Notification';
import avatar from '../assets/user.svg';
import mail from '../assets/envelope.svg';
import lock from '../assets/unlock.svg';
import { CREATE_STUDENT, STUDENT_LOGIN } from '../utils/utils';

const changeHandler = (value, stateFunc) => stateFunc(value);

const UserForm = ({ location }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createStudent, studentSignupResponse] = useMutation(CREATE_STUDENT, {
    variables: { data: { name, password, email, regNo: 'U08ML1009' } },
  });
  const [studentLogin, studentLoginResponse] = useMutation(STUDENT_LOGIN, {
    variables: { email, password },
  });
  const data = studentLoginResponse.data || studentSignupResponse.data;
  const error =
    (studentLoginResponse.error && studentLoginResponse.error.graphQLErrors) ||
    (studentSignupResponse.error && studentSignupResponse.error.graphQLErrors);
  const loading = studentSignupResponse.loading || studentLoginResponse.loading;

  return (
    <div
      className={`auth ${location.pathname === '/signup' ? 'default' : 'flip'}`}
    >
      <div className="auth__welcome">
        {location.pathname === '/signup' && (
          <>
            <h1>Welcome Back</h1>
            <p>
              {`You will need to log in to
      continue to your portal`}
            </p>
            <Link to="/login">LOG IN</Link>
          </>
        )}
        {location.pathname === '/login' && (
          <>
            <h1>Access Denied?</h1>
            <p>{`Sign up for the portal in order
          to continue your registration`}</p>
            <Link to="/signup">SIGN UP</Link>
          </>
        )}
      </div>
      <div className="auth__form">
        <div className="auth__form__wrapper">
          {location.pathname === '/signup' && (
            <div className="input-div">
              <img src={avatar} alt="user avatar" />
              <input
                type="text"
                placeholder="Fullname"
                onChange={(e) => changeHandler(e.target.value, setName)}
                name="name"
              />
            </div>
          )}
          <div className="input-div">
            <img src={mail} alt="email icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => changeHandler(e.target.value, setEmail)}
            />
          </div>
          <div className="input-div">
            <img src={lock} alt="lock icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => changeHandler(e.target.value, setPassword)}
            />
          </div>
          {loading && <Loader />}
          {data && <Redirect to="/home/me" push />}
          {error && <Notification message={error[0].message} />}
          <div className="footer">
            <button
              onClick={
                location.pathname === '/signup' ? createStudent : studentLogin
              }
            >
              {location.pathname === '/signup' ? 'SIGN UP' : 'LOG IN'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserForm);
