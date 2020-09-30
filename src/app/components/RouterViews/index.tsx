import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'app/store/global/selector';

type RouteView = {
  path: string;
  component: React.ComponentType;
  private?: boolean;
};

const Component: React.FC<{ routerViews: RouteView[] }> = ({ routerViews }) => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <Switch>
      {routerViews.map((r) => {
        if (!r.private) {
          return <Route key={r.path} path={r.path} component={r.component} />;
        } else {
          return (
            <Route key={r.path}>
              {loggedIn ? r.component : <Redirect to="/login" />}
            </Route>
          );
        }
      })}
    </Switch>
  );
};

export default Component;
