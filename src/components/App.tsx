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
import DailyReport from '@/pages/report/Daily';
import HistoryReport from '@/pages/report/History';
import AccountingReport from '@/pages/report/Accounting';
import RevenueReport from '@/pages/report/Revenue';
import BaseBallSingle from '@/pages/baseball/Single';
import BaseBallMultiple from '@/pages/baseball/Multiple';
import BaseBallHistory from '@/pages/baseball/History';
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

  { path: mPath.DAILY_REPORT, component: DailyReport },
  { path: mPath.HISTORY_REPORT, component: HistoryReport },
  { path: mPath.ACCOUNTING_REPORT, component: AccountingReport },
  { path: mPath.REVENUE_REPORT, component: RevenueReport },

  { path: mPath.BASEBALL_SINGLE, component: BaseBallSingle },
  { path: mPath.BASEBALL_MUITIPLE, component: BaseBallMultiple },
  { path: mPath.BASEBALL_HISTORY, component: BaseBallHistory },
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
