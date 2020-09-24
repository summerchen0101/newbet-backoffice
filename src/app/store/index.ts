import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './global/saga';

const sagaMiddleware = createSagaMiddleware();

import globalReducer from 'app/store/global/reducer';
import langReducer from 'app/store/language/reducer';
import styleReducer from 'app/store/style/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  lang: langReducer,
  style: styleReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof rootReducer>;
