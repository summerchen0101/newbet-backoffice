import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import APP from './containers/APP'

import {createStore} from 'redux'
import reducer from './containers/APP/reducer'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <APP compiler="TypeScript" framework="React" />
  </Provider>
  ,
  document.getElementById("root")
);
