import API from '@utils/api';
import {handleError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* notificationNotRead() {
  try {
    const res = yield API.get('/notifications/unread-count');
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.GET_NOTIFICATION_PRIVATE_READ),
        data: res.data,
      });
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_NOTIFICATION_PRIVATE_READ)});
    handleError(error);
  }
}
function* putNotificationNotRead({id}) {
  try {
    const res = yield API.put(`/notifications/${id}/read`);
    if (res.statusCode === 200) {
      yield put({
        type: Actions.GET_NOTIFICATION_PRIVATE_READ,
      });
    }
  } catch (error) {
    handleError(error);
  }
}
function* getNotificaiton() {
  try {
    const res = yield API.get(`/notifications`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.GET_LIST_NOTIFICATION),
        data: res.data,
      });
    }
  } catch (error) {
    yield put({
      type: _onFail(Actions.GET_LIST_NOTIFICATION),
    });
    handleError(error);
  }
}
export function* watchListNotificationPrivateSagas() {
  yield takeLatest(Actions.GET_NOTIFICATION_PRIVATE_READ, notificationNotRead);
  yield takeLatest(
    Actions.PUT_NOTIFICATION_PRIVATE_READER,
    putNotificationNotRead,
  );
  yield takeLatest(Actions.GET_LIST_NOTIFICATION, getNotificaiton);
}
