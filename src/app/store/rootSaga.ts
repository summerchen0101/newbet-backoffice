import { all } from 'redux-saga/effects';
import globalRootSaga from './global/fetchUser/saga';

export default function* rootSaga() {
  yield all([...globalRootSaga]);
}
