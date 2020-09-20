import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import * as Api from '../lib/apis/user';
import * as actionTypes from './constants';
import * as actions from './actions';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.id);
    console.log(user);
    yield put(actions.userFetchSuccess(user));
  } catch (e) {
    yield put(actions.userFetchFailed(e.message));
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(actionTypes.USER_FETCH_REQUESTED, fetchUser);
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// }

export default mySaga;
