import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FacultySelect from '../../components/student/FacultySelect';
import StudentDashboard from '../../components/student/dashboard';

const Pages = () => {
  return (
    <Switch>
      <Route component={FacultySelect} path="me/faculty/select" exact />
      <Route component={StudentDashboard} path="/me" exact />
      <Route component={StudentDashboard} path="/me/courses/edit" exact />
    </Switch>
  );
};

export default Pages;
