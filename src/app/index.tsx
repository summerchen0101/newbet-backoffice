import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store';
import LanguageProvider from 'app/containers/LanguageProvider';
import ThemeProvider from 'app/containers/StyleProvider';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
