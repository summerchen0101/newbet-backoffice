import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

import basicReducer from './reducer/basic';
import userReducer from './reducer/user';
import langReducer from '../containers/LanguageProvider/reducer';
import styleReducer from '../containers/styleProvider/reducer';

const rootReducer = combineReducers({
  basic: basicReducer,
  user: userReducer,
  lang: langReducer,
  style: styleReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof rootReducer>;
