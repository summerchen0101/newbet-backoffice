import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App'

import {createStore} from 'redux'
import reducer from './containers/App/reducer'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App compiler="TypeScript" framework="React" />
  </Provider>
  ,
  document.getElementById("root")
);
