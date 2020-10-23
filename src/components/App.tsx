import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import News from '@/pages/news/News';
import Sample from '@/pages/Sample';
import Manager from '@/pages/account/Manager';
import Online from '@/pages/account/Online';
import Account from '@/pages/level/Account';
import GameResult from '@/pages/level/GameResult';
import RootChange from '@/pages/level/RootChange';
import ShareAccount from '@/pages/level/ShareAccount';
import dailyReport from '@/pages/report/Daily';
import historyReport from '@/pages/report/History';
import accountingReport from '@/pages/report/Accounting';
import revenueReport from '@/pages/report/Revenue';
import * as mPath from '@/lib/menuPath';

const rootRoutes = [
  { path: '/login', component: Login },
  { path: '/', component: Home, exact: true },
  { path: '/sample', component: Sample },
  { path: '/news', component: News },

  { path: mPath.ACCOUNT_MANAGER, component: Manager },
  { path: mPath.ACCOUNT_ONLINE, component: Online },

  { path: mPath.LEVEL_ACCOUNT, component: Account },
  { path: mPath.GAME_RESULT, component: GameResult },
  { path: mPath.ROOT_CHANGE, component: RootChange },
  { path: mPath.SHARE_ACCOUNT, component: ShareAccount },

  { path: mPath.DAILY_REPORT, component: dailyReport },
  { path: mPath.HISTORY_REPORT, component: historyReport },
  { path: mPath.ACCOUNTING_REPORT, component: accountingReport },
  { path: mPath.REVENUE_REPORT, component: revenueReport },
];
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {rootRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
