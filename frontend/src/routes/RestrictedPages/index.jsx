import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StudentDashboard from '../../components/student/StudentDashboard';
import FacultySelect from '../../components/student/FacultySelect';

const Pages = () => {
  return (
    <Switch>
      <Route component={StudentDashboard} path="/me" exact />
      <Route component={FacultySelect} path="me/faculty/select" exact />
    </Switch>
  );
};

export default Pages;
