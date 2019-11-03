import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../assets/reply.svg';

const Header = ({ location, history }) => (
  <div>
    <nav className="navbar">
      <div className="navbar__wrapper">
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
      </div>
    </nav>
  </div>
);

export default withRouter(Header);
