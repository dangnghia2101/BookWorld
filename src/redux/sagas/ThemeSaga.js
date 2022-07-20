import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onSuccess} from '../actions';

function* changeTheme(action) {
  if (action.theme === 'light') {
    yield put({
      type: _onSuccess(Actions.CHANGE_THEME),
      data: 'light',
    });
  } else {
    yield put({
      type: _onSuccess(Actions.CHANGE_THEME),
      data: 'dark',
    });
  }
}

export function* watchThemeSagas() {
  yield takeLatest(Actions.CHANGE_THEME, changeTheme);
}
