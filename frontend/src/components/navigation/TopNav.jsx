import React from 'react';

const TopNav = (props) => (
  <div className="home__nav--top-nav">
    <p className="logo">Oasis College</p>
    <div className="menu" onClick={props.onMenuClick}>
      <span className="menu__item"></span>
      <span className="menu__item"></span>
      <span className="menu__item"></span>
      <span className="menu__item"></span>
    </div>
  </div>
);

export default TopNav;
