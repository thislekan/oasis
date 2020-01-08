import React from 'react';
import { withRouter } from 'react-router-dom';

import StudentData from './data/index';

const StudentDashboardData = (props) => {
  const { showMessages, showSettings } = props.observedState;
  return (
    <div
      className={`${
        showMessages || showSettings
          ? 'student-data student-data--displaced'
          : 'student-data'
      }`}
    >
      <div className="student-data__wrapper">
        <StudentData currentLocation={props.location.pathname} />
      </div>
    </div>
  );
};

export default withRouter(StudentDashboardData);
