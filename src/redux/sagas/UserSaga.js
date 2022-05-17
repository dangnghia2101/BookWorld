import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {call, put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import Storage from '@utils/storage';
import {HIDE} from '@redux/actions/HandlerLoading';
import messaging from '@react-native-firebase/messaging';
const getDeviceToken = async () => {
  return await messaging().getToken();
};
function* login(actions) {
  const body = actions.body;
  try {
    const res = yield API.post('auth/login', body);
    if (res.statusCode === 200) {
      Storage.setItem('tokenId', res);
      console.log('=>', res);
      yield put({type: _onSuccess(Actions.LOGIN_ACCOUNT), data: res.data});
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: true});
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: HIDE});
    yield put({type: _onFail(Actions.LOGIN_ACCOUNT)});
    hanldeError(error);
  }
}

function* fetchListDepartment() {
  try {
    const res = yield API.get('units');
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.FETCH_DEPARTMENTS), data: res.data});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.FETCH_DEPARTMENTS)});
    hanldeError(error);
  }
}

function* getInforUser(actions) {
  try {
    const res = yield API.get(`users/${actions.email}/info`);
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.INFOR_USER), data: res.data});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.INFOR_USER)});
    hanldeError(error);
  }
}
function* logout() {
  try {
    const fcmtoken = yield call(getDeviceToken);
    const res = yield API.post('auth/logout', {fcmtoken});
    if (res.data?.logout === true && res.statusCode === 200) {
      Storage.removeItem('tokenId');
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: null});
      yield put({type: _onSuccess(Actions.LOGIN_ACCOUNT), data: null});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.LOGOUT_ACCOUNT)});
    hanldeError(error);
  }
}

function* location(actions) {
  try {
    yield put({
      type: _onSuccess(Actions.DISTANCE_LOCATION),
      data: actions.latlong,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.DISTANCE_LOCATION)});
    hanldeError(error);
  }
}

export function* watchUserSagas() {
  yield takeLatest(Actions.LOGIN_ACCOUNT, login);
  yield takeLatest(Actions.INFOR_USER, getInforUser);
  yield takeLatest(Actions.FETCH_DEPARTMENTS, fetchListDepartment);
  yield takeLatest(Actions.LOGOUT_ACCOUNT, logout);
  yield takeLatest(Actions.DISTANCE_LOCATION, location);
}
