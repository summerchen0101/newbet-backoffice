import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import * as Api from 'app/lib/apis/user';
import * as actionTypes from './constants';
import * as actions from './actions';

function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.id);
    yield put(actions.userFetchSuccess(user));
  } catch (e) {
    yield put(actions.userFetchFailed(e.message));
  }
}

function* mySaga() {
  yield takeEvery(actionTypes.USER_FETCH_REQUESTED, fetchUser);
}
export default mySaga;
