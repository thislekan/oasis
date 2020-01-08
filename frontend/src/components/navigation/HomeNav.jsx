import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import cancelBtn from '../../assets/cancel.svg';

const initialState = {
  showBottomNav: false,
};

const HomeNav = (props) => {
  const [state, setState] = useState(initialState);

  const toggleNavbar = () => {
    setState({ ...state, showBottomNav: !state.showBottomNav });
  };

  return (
    <div style={{ display: props.hide ? 'none' : 'initial' }}>
      <nav className="navbar">
        <div className="navbar__wrapper">
          <div className="home__nav">
            <TopNav onMenuClick={toggleNavbar} />
            <div
              className={`home__nav--bottom-nav ${
                state.showBottomNav ? 'home__nav--bottom-nav--displayed' : ''
              }`}
            >
              <div className="nav-options">
                <div className="cancel">
                  <img
                    src={cancelBtn}
                    alt="cancel icon"
                    onClick={toggleNavbar}
                  />
                </div>
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
};

export default HomeNav;
