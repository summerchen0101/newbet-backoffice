import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

import menuReducer from './reducer/menu';
import userReducer from './reducer/user';
const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof rootReducer>;
