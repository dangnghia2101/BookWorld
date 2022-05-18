import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './UserSaga';
export default function* rootSaga() {
  yield all([fork(watchUserSagas)]);
}
