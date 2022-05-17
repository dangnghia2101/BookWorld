import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import DeviceInfo from 'react-native-device-info';

function* checkVersionApp() {
  const version = DeviceInfo.getVersion();
  const body = {
    version,
  };
  try {
    const res = yield API.post('/auth/check-app-version', body);
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.CHECK_VERSION_APP), data: res.data});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.CHECK_VERSION_APP)});
    hanldeError(error);
  }
}

export function* watchCheckVersionAppSagas() {
  yield takeLatest(Actions.CHECK_VERSION_APP, checkVersionApp);
}
