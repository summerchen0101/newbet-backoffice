import React, { useState, useReducer } from 'react';
import Dashboard from 'app/containers/Dashboard';
import LoginPage from 'app/containers/LoginPage';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { rootReducer, CustomStore, rootState } from 'app/customStore';

const history = createBrowserHistory();
type IProps = { loggedIn: boolean };
const App: React.FC<IProps> = (props) => {
  const [store, mutate] = useReducer(rootReducer, rootState);
  return (
    <CustomStore.Provider value={{ store, mutate }}>
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/">
            {props.loggedIn ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </CustomStore.Provider>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: true,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
