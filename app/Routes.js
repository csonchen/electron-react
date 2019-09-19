import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import TodoListPage from './containers/TodoListPage';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.TODOLIST} component={TodoListPage} />
      <Route exact path={routes.COUNTER} component={CounterPage} />
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
