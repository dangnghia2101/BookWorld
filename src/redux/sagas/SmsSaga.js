import API from '@utils/api';
import Actions, {_onFail, _onSuccess} from '@redux/actions';
import {takeLatest, put} from 'redux-saga/effects';
import {hanldeError} from '@utils/handleError';
function* getListPhone() {
  try {
    const res = yield API.get('external/get-list-phones');
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.GET_LIST_PHONE), data: res.data});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_LIST_PHONE)});
    hanldeError(error);
  }
}

export function* watchSmsSaga() {
  yield takeLatest(Actions.GET_LIST_PHONE, getListPhone);
}
