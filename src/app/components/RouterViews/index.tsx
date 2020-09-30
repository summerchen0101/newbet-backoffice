import React from 'react';
import { Switch, Route } from 'react-router-dom';
type RouteView = {
  path: string;
  component: React.ComponentType;
};
const Component: React.FC<{ routerViews: RouteView[] }> = ({ routerViews }) => {
  return (
    <Switch>
      {routerViews.map((r) => (
        <Route key={r.path} path={r.path} component={r.component} />
      ))}
    </Switch>
  );
};

export default Component;
