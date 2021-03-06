import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Store, Reducer, AnyAction } from 'redux';
import staticReducers, { RootState } from './rootReducer';

export { RootState } from './rootReducer';

export type StoreType = Store<RootState, AnyAction> & {
  asyncReducers?: { [key: string]: Reducer };
  injectReducer?: (key: string, asyncReducer: Reducer) => void;
};

function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export default function configureAppStore() {
  const store: StoreType = {
    ...configureStore({
      reducer: createReducer(),
    }),
    asyncReducers: {},
    injectReducer: (key, asyncReducer) => {
      store.asyncReducers[key] = asyncReducer;
      store.replaceReducer(createReducer(store.asyncReducers));
    },
  };

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(createReducer(store.asyncReducers)),
    );
  }

  return store;
}
