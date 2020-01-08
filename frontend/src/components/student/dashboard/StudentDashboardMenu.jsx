import React from 'react';

import cancelImg from '../../../assets/cancel.svg';
import cappedImg from '../../../assets/capped.jpg';
import regImg from '../../../assets/registration.svg';
import pin1Img from '../../../assets/pin1.svg';
import pin2Img from '../../../assets/pin2.svg';
import historyImg from '../../../assets/history.svg';
import bankImg from '../../../assets/bank.svg';
import hatImg from '../../../assets/hat.svg';
import errorImg from '../../../assets/error.svg';
import clockImg from '../../../assets/clock.svg';
import resultHistoryImg from '../../../assets/result.svg';

const StudentMenu = (props) => (
  <div
    className={`student-menu ${
      props.showMenu ? 'student-menu--displayed' : ''
    }`}
  >
    <div className="hide-div">
      <img
        src={cancelImg}
        alt="cancel button"
        className="cancel-btn"
        onClick={props.toggleState}
      />
    </div>
    <div className="student-menu__wrapper">
      <div className="student-menu__wrapper__content">
        <div className="nav-options">
          <div className="nav-options__user">
            <div className="wrapper">
              <div className="nav-options__user__img">
                <img src={cappedImg} alt="avatar" />
              </div>
              <div className="nav-options__user__name">
                <p className="firstname">Firstname</p>
                <p className="lastname">Lastname</p>
              </div>
            </div>
            <p className="level">200L Electrical Engineering</p>
          </div>
          <div className="nav-options__links">
            <div className="nav-options__links__course-links">
              <div>
                <img src={regImg} alt="registration" />
                <a href="/">registration</a>
              </div>
              <div>
                <img src={pin1Img} alt="add course" />
                <a href="/">add course</a>
              </div>
              <div>
                <img src={pin2Img} alt="drop course" />
                <a href="/">drop course</a>
              </div>
              <div>
                <img src={historyImg} alt="course history" />
                <a href="/">course history</a>
              </div>
            </div>
            <div className="nav-options__links__payment">
              <div>
                <img src={bankImg} alt="make payment" />
                <a href="/">make payment</a>
              </div>
              <div>
                <img src={clockImg} alt="payment history" />
                <a href="/">payment history</a>
              </div>
              <div>
                <img src={errorImg} alt="report errors" />
                <a href="/">report errors</a>
              </div>
            </div>
            <div className="nav-options__links__results">
              <div>
                <img src={hatImg} alt="view result" />
                <a href="/">view result</a>
              </div>
              <div>
                <img src={resultHistoryImg} alt="result history" />
                <a href="/">result history</a>
              </div>
              <div>
                <img src={errorImg} alt="report errors" />
                <a href="/">report errors</a>
              </div>
            </div>
            <div className="log-out">
              <button>LOG OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentMenu;
