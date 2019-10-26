import React, { useState } from 'react';

const Notification = (props) => {
  const [hideNotification, setHideNotification] = useState(false);

  return (
    <div
      className={`notification ${
        hideNotification ? 'notification--hidden' : ''
      }`}
    >
      <div className="notification__wrapper">
        <div className="notification__text">
          <h4>An error occured</h4>
          <p>{props.message}</p>
        </div>
        <div className="notification__btn">
          <button
            type="button"
            className="btn"
            onClick={() => setHideNotification(true)}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
