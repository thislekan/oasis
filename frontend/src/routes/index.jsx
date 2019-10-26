import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import StudentAuthForm from '../containers/StudentAuthForm';
import StudentDashboard from '../components/student/StudentDashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={StudentAuthForm} path="/login" exact />
        <Route component={StudentAuthForm} path="/signup" exact />
        <Route component={StudentDashboard} path="/home/me" exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
