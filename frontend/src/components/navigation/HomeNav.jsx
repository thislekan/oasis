import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';

const HomeNav = () => (
  <div>
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="home__nav">
          <TopNav />
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
        </div>
      </div>
    </nav>
  </div>
);

export default HomeNav;
