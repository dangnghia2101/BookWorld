import API from '@utils/api';
import {call, put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getAllBook(actions) {
  try {
    const res = yield API.get('books/getAllBook');
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.GET_ALL_BOOK), data: res.data});
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: true});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_ALL_BOOK)});
  }
}

function* getAllCategory(actions) {
  try {
    const res = yield API.get('categories/getAllCategories');
    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.GET_ALL_CATEGORY), data: res.data});
      yield put({type: _onSuccess(Actions.IS_LOGIN), data: true});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_ALL_CATEGORY)});
  }
}

export function* watchBookSagas() {
  yield takeLatest(Actions.GET_ALL_BOOK, getAllBook);
  yield takeLatest(Actions.GET_ALL_CATEGORY, getAllCategory);
}
