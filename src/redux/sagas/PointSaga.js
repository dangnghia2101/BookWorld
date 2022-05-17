import {HIDE} from '@redux/actions/HandlerLoading';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* fetchDataAllDetailSemestor() {
  try {
    const res = yield API.get(`external/get-list-terms`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.FETCH_ALL_DETAIL_SEMESTER),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: HIDE});
    yield put({type: _onFail(Actions.FETCH_ALL_DETAIL_SEMESTER)});
  }
}

function* fetchDataPointSemestor(actions) {
  const {_id} = actions;
  try {
    const res = yield API.get(`external/get-transcript-by-term?term_id=${_id}`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.FETCH_POINT_SEMESTER),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: HIDE});
    yield put({type: _onFail(Actions.FETCH_POINT_SEMESTER)});
    // hanldeError(error);
  }
}

export function* watchPointSagas() {
  yield takeLatest(
    Actions.FETCH_ALL_DETAIL_SEMESTER,
    fetchDataAllDetailSemestor,
  );
  yield takeLatest(Actions.FETCH_POINT_SEMESTER, fetchDataPointSemestor);
}
