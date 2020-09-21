import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Dashboard from 'app/components/Dashboard/index';
import { store } from './store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard>
      <App compiler="TypeScript" framework="React" />
    </Dashboard>
  </Provider>,
  document.getElementById('root'),
);
