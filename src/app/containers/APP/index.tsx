import React from 'react';
import Dashboard from 'app/containers/Dashboard';
import LoginPage from 'app/containers/LoginPage';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RouterViews from 'app/components/RouterViews';

const history = createBrowserHistory();
const App: React.FC = () => {
  const routerViews = [
    { path: '/login', component: LoginPage },
    { path: '/', component: Dashboard, private: true },
  ];
  return (
    <Router history={history}>
      <RouterViews routerViews={routerViews} />
      {/* <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/">
          {props.loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
      </Switch> */}
    </Router>
  );
};

export default App;
