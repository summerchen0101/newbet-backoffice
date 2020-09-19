import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import mySaga from './containers/App/store/saga';

const sagaMiddleware = createSagaMiddleware();

import countReducer from './containers/App/store/reducer/count';
import userReducer from './containers/App/store/reducer/user';
const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof rootReducer>;

ReactDOM.render(
  <Provider store={store}>
    <App compiler="TypeScript" framework="React" />
  </Provider>,
  document.getElementById('root'),
);
