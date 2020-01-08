import React, { useState } from 'react';
import StudentNotifications from './notifications/Notifications';
import StudentDashboardMenu from './StudentDashboardMenu';
import StudentDashboardData from './StudentDashboardData';

const initialState = {
  showMessages: false,
  showSettings: false,
  showMenu: false,
};

const DashboardSkeleton = () => {
  const [state, setState] = useState(initialState);
  const toggleState = (value) => {
    if (value) return setState({ ...initialState, [value]: !state[value] });
    return setState({ ...initialState });
  };
  return (
    <div className="student-dash">
      <div className="student-dash__wrapper">
        <StudentNotifications
          showMessages={state.showMessages}
          showSettings={state.showSettings}
          toggleState={toggleState}
        />
        <StudentDashboardMenu
          showMenu={state.showMenu}
          toggleState={toggleState}
        />
        <StudentDashboardData observedState={state} />
      </div>
    </div>
  );
};

export default DashboardSkeleton;
