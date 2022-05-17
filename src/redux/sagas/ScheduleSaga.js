import {HIDE} from '@redux/actions/HandlerLoading';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* fetchDataSchedule(actions) {
  const {day} = actions;
  try {
    const res = yield API.get(`external/get-schedule?days=${day}`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.FETCH_SCHEDULE),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: HIDE});
    yield put({type: _onFail(Actions.FETCH_SCHEDULE)});
    hanldeError(error);
  }
}

function* fetchDataTestSchedule(actions) {
  const {day} = actions;
  try {
    const res = yield API.get(`external/get-test-schedule?days=${day}`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.FETCH_TEST_SCHEDULE),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: HIDE});
    yield put({type: _onFail(Actions.FETCH_TEST_SCHEDULE)});
    hanldeError(error);
  }
}

export function* watchScheduleSagas() {
  yield takeLatest(Actions.FETCH_SCHEDULE, fetchDataSchedule);
  yield takeLatest(Actions.FETCH_TEST_SCHEDULE, fetchDataTestSchedule);
}
