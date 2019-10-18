import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import UserForm from '../components/UserForm';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={UserForm} path='/login' exact />
        <Route component={UserForm} path='/signup' exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;