import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './UserSaga';
import {watchBookSagas} from './BookSaga';
import {watchAuthorSagas} from './AuthorSaga';
export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchBookSagas),
    fork(watchAuthorSagas),
  ]);
}
