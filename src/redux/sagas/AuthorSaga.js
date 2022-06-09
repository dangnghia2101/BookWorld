import API from '@utils/api';
import {handleError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getAllAuthor() {
  try {
    const res = yield API.get('accounts/allAuthor');
    if (res) {
      yield put({type: _onSuccess(Actions.GET_ALL_AUTHOR), data: res});
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: true});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_ALL_AUTHOR)});
    handleError(error);
  }
}

export function* watchAuthorSagas() {
  yield takeLatest(Actions.GET_ALL_AUTHOR, getAllAuthor);
}
