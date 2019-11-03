import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import StudentAuthForm from '../containers/StudentAuthForm';
import ProtectedRoutes from './ProtectedRoute';
import RestrictedPages from './RestrictedPages';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={StudentAuthForm} path="/login" exact />
        <Route component={StudentAuthForm} path="/signup" exact />
        <ProtectedRoutes children={<RestrictedPages />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
