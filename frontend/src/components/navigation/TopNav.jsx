import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = (props) => (
  <div className="home__nav--top-nav">
    <Link to="/" className="logo">
      Oasis College
    </Link>
    <div className="menu" onClick={props.onMenuClick}>
      <span className="menu__item"></span>
      <span className="menu__item"></span>
      <span className="menu__item"></span>
      <span className="menu__item"></span>
    </div>
  </div>
);

export default TopNav;
