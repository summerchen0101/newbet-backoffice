import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import News from '@/pages/News';
import Sample from '@/pages/Sample';
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes'

const rootRoutes = [
  {path: '/login', component: Login},
  {path: '/home', component: Home},
  {path: '/news', component: News},
  {path: '/sample', component: Sample},
]

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {rootRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
