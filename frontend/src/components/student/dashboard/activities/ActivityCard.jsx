import React from 'react';

const ActivityCard = (props) => (
  <div className="activity-card">
    <div className="activity-card__wrapper">
      {props.activity && (
        <div className="activity">
          <div className="header">
            <p className="coursename">Strenght Of Material</p>
            <p className="credit-unit">2 C.U</p>
          </div>
          <div className="body">
            <p className="course-code">MEEN 204</p>
            <p className="time">10:00am - 12:00pm</p>
          </div>
          <div className="footer">
            <p className="venue">Ahmed Aminu Theater Hall</p>
            <button className="dismiss">DISMISS</button>
          </div>
        </div>
      )}
      {props.log && (
        <div className="messages">
          <div className="header">
            <h5>Faculty day to be postponed until further notice.</h5>
          </div>
          <div className="body">
            <p>
              Elit magna reprehenderit consequat voluptate. Ex non quis nostrud
              mollit eiusmod culpa incididunt laborum reprehenderit
              reprehenderit...
            </p>
          </div>
          <div className="footer">
            <button className="btn btn--brown">READ MORE</button>
            <button className="btn btn--red">DISMISS</button>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default ActivityCard;
