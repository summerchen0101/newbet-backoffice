import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App'

import {createStore, combineReducers} from 'redux'
import countReducer from './containers/App/store/reducer/count'
const rootReducer = combineReducers({
  count: countReducer
})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

ReactDOM.render(
  <Provider store={store}>
    <App compiler="TypeScript" framework="React" />
  </Provider>
  ,
  document.getElementById("root")
);
