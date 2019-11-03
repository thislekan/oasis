import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import Avatar from '../../assets/user-regular.svg';

const loggedInStudentNavBar = () => (
  <div>
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="home__nav">
          <TopNav />
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
      </div>
    </nav>
  </div>
);

export default loggedInStudentNavBar;
