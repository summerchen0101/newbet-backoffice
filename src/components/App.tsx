import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '@/pages/Home';
import News from '@/pages/News';
import Sample from '@/pages/Sample';
import Dashboard from '@/components/Dashboard'
import RouteWithSubRoutes from '@/utils/RouteWithWubRoutes'

const rootRoutes = [
  {path: '/sample', component: Sample},
  { path: '/',
    component: Dashboard,
    routes: [
      {path: '/home', component: Home},
      {path: '/news', component: News},
    ]
  },
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
