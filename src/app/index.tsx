import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store';
import LanguageProvider from 'app/containers/LanguageProvider';
import StyleProvider from 'app/containers/StyleProvider';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <StyleProvider>
        <App />
      </StyleProvider>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
