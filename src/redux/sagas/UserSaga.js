import API from '@utils/api';
import {handleError} from '@utils/handleError';
import {call, put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import Storage from '@utils/storage';
import messaging from '@react-native-firebase/messaging';
import {SHOW, HIDE} from '../actions/HandlerLoading';

const getDeviceToken = async () => {
  return await messaging().getToken();
};

function* login(actions) {
  const body = actions.body;
  try {
    yield put({type: SHOW});
    const res = yield API.post('auth/login', body);
    if (res.statusCode === 200) {
      Storage.setItem('tokenId', res);
      yield put({type: _onSuccess('LOGIN'), data: res.data});
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: true});
      yield put({type: HIDE});
    }
  } catch (error) {
    yield put({type: _onFail('LOGIN')});
    console.log('login error ==========> ', actions);
  }
}

function* getInfoUser(actions) {
  try {
    const res = yield API.get(`users/${actions.email}/info`);
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.INFOR_USER), data: res.data});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.INFOR_USER)});
    handleError(error);
  }
}

function* logout() {
  try {
    const fcmtoken = yield yield call(getDeviceToken);
    console.log('========> fcm token', fcmtoken);
    const res = yield API.post('auth/logout', {fcmtoken});
    if (res.data?.logout === true && res.statusCode === 200) {
      // Storage.removeItem('tokenId');
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: null});
      yield put({type: _onSuccess('LOGIN'), data: null});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.LOGOUT_ACCOUNT)});
  }
}

export function* watchUserSagas() {
  yield takeLatest('LOGIN', login);
  yield takeLatest(Actions.LOGOUT_ACCOUNT, logout);
}
