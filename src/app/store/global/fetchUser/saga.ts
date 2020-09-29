import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from 'app/lib/apis/user';
import * as actionTypes from './constants';
import UserAction from './actions';

export function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.id);
    if ('username' in user) {
      yield put(UserAction.userFetchSuccess(user));
    } else {
      throw new Error('[fetchUser] fallback data error');
    }
  } catch (e) {
    yield put(UserAction.userFetchFailed(e.message));
  }
}

export default [takeEvery(actionTypes.USER_FETCH_REQUESTED, fetchUser)];
