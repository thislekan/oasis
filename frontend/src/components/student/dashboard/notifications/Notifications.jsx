import React from 'react';
import { Link } from 'react-router-dom';

import DailyActivities from '../activities/DailyActivities';
import settingsImg from '../../../../assets/settings.svg';
import BellImg from '../../../../assets/bell.svg';

const StudentNotifications = (props) => (
  <div className="student-notification">
    <div className="student-notification__wrapper">
      <div className="student-notification__wrapper__header">
        <Link to="/" className="logo">
          Dashboard
        </Link>
        <div className="dashboard-icons">
          <div
            className="dashboard-icons__icon-wrapper"
            onClick={() => props.toggleState('showMenu')}
          >
            <p>Menu</p>
            <div className="menu">
              <span className="menu__item"></span>
              <span className="menu__item"></span>
              <span className="menu__item"></span>
              <span className="menu__item"></span>
            </div>
          </div>
          <div
            className="dashboard-icons__icon-wrapper"
            onClick={() => props.toggleState('showMessages')}
          >
            <p>Notifications</p>
            <img src={BellImg} alt="notification icon" className="icon" />
          </div>
          <div
            className="dashboard-icons__icon-wrapper"
            onClick={() => props.toggleState('showSettings')}
          >
            <p>Activities</p>
            <img src={settingsImg} alt="settings icon" className="icon" />
          </div>
        </div>
      </div>
      <div
        className={`${
          props.showMessages || props.showSettings
            ? 'student-notification__wrapper__body student-notification__wrapper__body--displayed'
            : 'student-notification__wrapper__body'
        }`}
      >
        <div className="wrapper">
          <p id="date">Wednesday, 25th of July, 2019</p>
          <DailyActivities
            showMessages={props.showMessages}
            toggleState={props.toggleState}
          />
        </div>
      </div>
    </div>
  </div>
);

export default StudentNotifications;
