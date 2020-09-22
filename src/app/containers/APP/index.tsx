import React from 'react';
import Dashboard from 'app/components/Dashboard';
import LoginPage from 'app/containers/LoginPage';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

type IProps = { loggedIn: boolean };

const App: React.FC<IProps> = (props) => (
  <Router>
    <Switch>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
      <Route path="/">
        {props.loggedIn ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = (state) => ({
  loggedIn: true,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
