import {navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';
import {HIDE, SHOW} from '@redux/actions/HandlerLoading';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* fetchDataEvent() {
  try {
    const res = yield API.post('events/approveds');
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.FETCH_EVENT), data: res.data});
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: HIDE});
    yield put({type: _onFail(Actions.FETCH_EVENT)});
    hanldeError(error);
  }
}
function* fetchEventHighlight() {
  try {
    const res = yield API.get('events/view/pinned');
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.FETCH_EVENT_HIGHLIGHT),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.FETCH_EVENT_HIGHLIGHT)});
    yield put({type: HIDE});
    hanldeError(error);
  }
}

function* joinEvent(actions) {
  const {id_event, email} = actions;
  try {
    yield put({type: SHOW});
    const res = yield API.post(`events/${id_event}/register`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.JOIN_EVENT),
        data: res.data,
      });
    }
    const res1 = yield API.get(`users/${email}/info`);
    if (res1.statusCode === 200) {
      yield put({type: _onSuccess(Actions.INFOR_USER), data: res1.data});
    }
    yield put({type: HIDE});
  } catch (error) {
    yield put({type: _onFail(Actions.JOIN_EVENT), data: error.data});
    yield put({type: HIDE});
  }
}

function* checkinEvent(actions) {
  const {id_event, body} = actions;
  try {
    const res = yield API.post(`${id_event}`, body);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.CHECKIN_EVENT),
        data: res.data,
      });
      navigate(routes.SCAN_SUCCESS, {success: true});
      yield put({type: HIDE});
    }
  } catch (error) {
    navigate(routes.SCAN_SUCCESS, {success: false});
    yield put({type: _onFail(Actions.CHECKIN_EVENT)});
    yield put({type: HIDE});
    hanldeError(error);
  }
}

function* searchEvent(actions) {
  const {key, skip, limit} = actions;
  try {
    const res = yield API.get(
      `events/approveds/search?limit=${limit}&skip=${skip}&key=${key}`,
    );
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.SEARCH_EVENT),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.CHECKIN_EVENT)});
    yield put({type: HIDE});
    hanldeError(error);
  }
}
function* getEventById(actions) {
  const {id, idNoti} = actions;
  try {
    const res = yield API.get(`/events/${id}`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.GET_EVENT_BY_ID),
        data: res.data,
      });
      yield put({type: HIDE});
    }
    yield API.put(`/notifications/${idNoti}/read`);
    const listNotification = yield API.get(`/notifications`);
    if (listNotification.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.GET_LIST_NOTIFICATION),
        data: listNotification.data,
      });
    }
    const countNotification = yield API.get('/notifications/unread-count');
    if (countNotification.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.GET_NOTIFICATION_PRIVATE_READ),
        data: countNotification.data,
      });
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_EVENT_BY_ID)});
    yield put({type: HIDE});
    hanldeError(error);
  }
}

function* getListPost(actions) {
  const {optionPost} = actions;
  try {
    const res = yield API.get(
      `external/get-posts?type=${optionPost.type}&page=${optionPost.page}`,
    );
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.LIST_POSTS),
        data: res.data,
        error: res.error || null,
        loading: false,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.LIST_POSTS)});
    yield put({type: HIDE});
    hanldeError({error, loading: false});
  }
}

function* getDetailPost(actions) {
  const {id} = actions;
  try {
    const res = yield API.get(`external/get-post-detail?post_id=${id}`);
    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.DETAIL_POST),
        data: res.data,
      });
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.DETAIL_POST)});
    yield put({type: HIDE});
    hanldeError(error);
  }
}
export function* watchEventSagas() {
  yield takeLatest(Actions.FETCH_EVENT, fetchDataEvent);
  yield takeLatest(Actions.FETCH_EVENT_HIGHLIGHT, fetchEventHighlight);
  yield takeLatest(Actions.JOIN_EVENT, joinEvent);
  yield takeLatest(Actions.CHECKIN_EVENT, checkinEvent);
  yield takeLatest(Actions.SEARCH_EVENT, searchEvent);
  yield takeLatest(Actions.GET_EVENT_BY_ID, getEventById);
  yield takeLatest(Actions.LIST_POSTS, getListPost);
  yield takeLatest(Actions.DETAIL_POST, getDetailPost);
}
