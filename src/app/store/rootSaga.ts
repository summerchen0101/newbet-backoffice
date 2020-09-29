import { all } from 'redux-saga/effects';
import globalRootSaga from './global/User/saga';

export default function* rootSaga() {
  yield all([...globalRootSaga]);
}
