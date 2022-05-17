import {HIDE} from '@redux/actions/HandlerLoading';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

const key = {key: ''};
function* listRoom() {
  try {
    const departmentList = yield API.get('/departments/');
    const event = yield API.post(
      `/events/department/${departmentList.data[0]._id}/search`,
      key,
    );
    if (departmentList.statusCode === 200 && event.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.LIST_ROOM),
        data: {data: departmentList.data, event: event.data},
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.LIST_ROOM)});
    yield put({type: HIDE});
    hanldeError(error);
  }
}
function* roomEvent({body}) {
  if (!body) return;
  try {
    const resRoom = yield API.post(`/events/department/${body}/search`, key);
    if (resRoom.statusCode === 200) {
      yield put({type: _onSuccess(Actions.ROOM_EVENT), data: resRoom.data});
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.ROOM_EVENT)});
    yield put({type: HIDE});
    hanldeError(error);
    console.error(error);
  }
}
function* getOneEvent() {
  try {
    const resRoom = yield API.get(`/events/`);
    if (resRoom.statusCode === 200) {
      yield put({type: _onSuccess(Actions.GET_ONE_EVENT), data: resRoom.data});
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_ONE_EVENT)});
    yield put({type: HIDE});
    hanldeError(error);
    console.error(error);
  }
}

export function* watchListRoomSagas() {
  yield takeLatest(Actions.LIST_ROOM, listRoom);
  yield takeLatest(Actions.ROOM_EVENT, roomEvent);
  yield takeLatest(Actions.GET_ONE_EVENT, getOneEvent);
}
