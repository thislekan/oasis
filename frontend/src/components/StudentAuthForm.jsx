import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loader from './Loader';
import Notification from './Notification';
import avatar from '../assets/user.svg';
import mail from '../assets/envelope.svg';
import lock from '../assets/unlock.svg';
import mobile from '../assets/mobile.svg';

const StudentAuthFormInputs = (props) => {
  return (
    <div
      className={`auth ${props.location === '/signup' ? 'default' : 'flip'}`}
    >
      <div className="auth__welcome">
        {props.location === '/signup' && (
          <>
            <h1>Welcome Back</h1>
            <p>
              {`You will need to log in to
      continue to your portal`}
            </p>
            <Link to="/login">LOG IN</Link>
          </>
        )}
        {props.location === '/login' && (
          <>
            <h1>Access Denied?</h1>
            <p>{`Sign up for the portal in order
          to continue your registration`}</p>
            <Link to="/signup">SIGN UP</Link>
          </>
        )}
      </div>
      <div className="auth__form">
        <div
          className={`auth__form__wrapper ${
            props.location === '/login' ? 'auth__form__wrapper--shorter' : ''
          }`}
        >
          {props.location === '/signup' && (
            <div className="input-div">
              <img src={avatar} alt="user avatar" />
              <input
                type="text"
                placeholder="Fullname"
                onChange={props.onChangeHandler}
                name="name"
                required
              />
            </div>
          )}
          {props.location === '/signup' && (
            <div className="input-div">
              <img src={mobile} alt="mobile phone avatar" />
              <input
                type="text"
                placeholder="Phone number"
                onChange={props.onChangeHandler}
                name="phone"
                required
              />
            </div>
          )}
          <div className="input-div">
            <img src={mail} alt="email icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={props.onChangeHandler}
              required
            />
          </div>
          <div className="input-div">
            <img src={lock} alt="lock icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={props.onChangeHandler}
              required
            />
          </div>
          {props.loading && <Loader />}
          {props.data && <Redirect to="/home/me" push />}
          {props.error && <Notification message={props.error} />}
          <div className="footer">
            <input
              type="submit"
              value={props.location === '/signup' ? 'SIGN UP' : 'LOG IN'}
              className="submit-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAuthFormInputs;
