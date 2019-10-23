import React from "react";
import { Link } from "react-router-dom";
// import '../styles/header.scss';

const Header = () => (
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
              <Link to="/" className="link">
                Login
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="auth__nav"></div> */}
        {/* <div className="student__nav"></div> */}
      </div>
    </nav>
  </div>
);

export default Header;
