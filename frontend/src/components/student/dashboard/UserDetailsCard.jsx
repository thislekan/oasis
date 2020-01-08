import React from 'react';

import user1 from '../../../assets/user1.svg';
import user2 from '../../../assets/user2.svg';
import mosque from '../../../assets/mosque.svg';
import calendarImg from '../../../assets/calendar.svg';
import pen from '../../../assets/pen.svg';
import office from '../../../assets/office.svg';

const UserDetails = (props) => (
  <div className="user-card">
    <div className="user-card__wrapper">
      <div className="user-card__wrapper__title">
        <h5>{!props.kin ? 'Bio' : 'Next of Kin'}</h5>
      </div>
      <div className="user-card__wrapper__body">
        <div className="text">
          <p className="address">7 Ahmadu Bello Way, Kaduna, Kaduna State</p>
          <p className="phone">
            <a href="tel:2525550126">(252) 555-0126</a>
          </p>
        </div>
        <div className="img-div">
          <img src={!props.kin ? user1 : user2} alt="user avatar" />
        </div>
      </div>
      <div className="user-card__wrapper__footer">
        {!props.kin && (
          <>
            <div className="religion">
              <img src={mosque} alt="religion icon" />
              <p>muslim</p>
            </div>
            <div className="dob">
              <img src={calendarImg} alt="calendar icon" />
              <p>08/10/99</p>
            </div>
          </>
        )}
        {props.kin && (
          <div className="office">
            <img src={office} alt="office icon" />
            <p>Andela, Lagos</p>
          </div>
        )}
      </div>
      <div className="edit-btn">
        <img src={pen} alt="edit icon" />
      </div>
    </div>
  </div>
);

export default UserDetails;
