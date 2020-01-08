import React from 'react';

import ActivityCard from './ActivityCard';
import cancelImg from '../../../../assets/cancel.svg';
import lecture1 from '../../../../assets/lecture1.svg';

const activities = [1, 2, 3, 4, 5];
const logs = [1, 2, 3];

const DailyActivities = (props) => (
  <div className="daily-activities">
    <div className="hide-div">
      <img
        src={cancelImg}
        alt="cancel button"
        className="cancel-btn"
        onClick={props.toggleState}
      />
    </div>
    <div className="image-holder">
      <img src={lecture1} alt="lecture" />
    </div>
    <div className="activities">
      <p className="sub-heading">Activities: </p>
      {!props.showMessages &&
        activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      {props.showMessages &&
        logs.map((log, index) => <ActivityCard key={index} log={log} />)}
    </div>
  </div>
);

export default DailyActivities;
