import React from 'react';

import RegisteredCourses from './RegisteredCourses';
import AddCourses from './AddCourse';
import UserDetailsCard from '../UserDetailsCard';

const renderWithSwitch = (route) => {
  switch (route) {
    case '/me':
      return <RegisteredCourses hideCheckBox />;
    case '/me/courses/edit':
      return <AddCourses />;
    default:
      break;
  }
};

const StudentData = (props) => (
  <div className="body">
    <div className="body__info">
      <UserDetailsCard />
      <UserDetailsCard kin />
    </div>
    {renderWithSwitch(props.currentLocation)}
  </div>
);

export default StudentData;
