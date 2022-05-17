import {all, fork} from 'redux-saga/effects';
import {watchListRoomSagas} from './ListRoomSaga';
import {watchUserSagas} from './UserSaga';
import {watchEventSagas} from './EventSaga';
import {watchListNotificationPrivateSagas} from './NotificationSaga';
import {watchCheckVersionAppSagas} from './CheckVersionAppSaga';
import {watchSmsSaga} from '@redux/sagas/SmsSaga';
import {watchScheduleSagas} from './ScheduleSaga';
import {watchTuitionSaga} from '@redux/sagas/TuitionSaga';
import {watchPointSagas} from './PointSaga';
export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchListRoomSagas),
    fork(watchListNotificationPrivateSagas),
    fork(watchEventSagas),
    fork(watchCheckVersionAppSagas),
    fork(watchSmsSaga),
    fork(watchScheduleSagas),
    fork(watchTuitionSaga),
    fork(watchPointSagas),
  ]);
}
