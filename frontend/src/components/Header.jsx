import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../assets/reply.svg';
import Avatar from '../assets/user-regular.svg';

const Header = ({ location, history }) => (
  <div>
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="home__nav">
          <div className="home__nav--top-nav">
            <p className="logo">Oasis College</p>
            <div className="menu">
              <span className="menu__item"></span>
              <span className="menu__item"></span>
              <span className="menu__item"></span>
              <span className="menu__item"></span>
            </div>
          </div>
          {location.pathname === '/' && (
            <div className="home__nav--bottom-nav">
              <div className="nav-options">
                <Link to="/" className="link">
                  Aout Oasis
                </Link>
                <Link to="/" className="link">
                  Faculties
                </Link>
                <Link to="/" className="link">
                  Staff
                </Link>
                <Link to="/" className="link">
                  Post Graduate
                </Link>
                <Link to="/login" className="link">
                  Login
                </Link>
              </div>
            </div>
          )}
          <div className="home__nav--student-nav">
            <div className="home__nav--student-nav__options">
              <Link to="/" className="link">
                PAYMENT
              </Link>
              <Link to="/" className="link">
                ADD & DROP
              </Link>
              <Link to="/" className="link link--avatar">
                <img src={Avatar} alt="user avatar" />
              </Link>
              <button className="log-out">LOG OUT</button>
            </div>
          </div>
        </div>
        {(location.pathname === '/login' ||
          location.pathname === '/signup') && (
          <div className="auth__nav">
            <div
              className={`auth__nav__wrapper ${
                location.pathname === '/login'
                  ? 'auth__nav--right-sided'
                  : 'auth__nav--left-sided'
              }`}
            >
              <div onClick={history.goBack} className="back-btn">
                <img src={BackButton} alt="back button" />
              </div>
              <Link to="/" className="home-btn">
                Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  </div>
);

export default withRouter(Header);
