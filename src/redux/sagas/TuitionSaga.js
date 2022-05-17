import API from '@utils/api';
import Actions, {_onFail, _onSuccess} from '@redux/actions';
import {takeLatest, put} from 'redux-saga/effects';
import {hanldeError} from '@utils/handleError';
function* getWalletsSaga() {
  try {
    const res = yield API.get('external/get-detail-fee');

    if (res.statusCode === 200) {
      yield put({type: _onSuccess(Actions.GET_WALLETS), data: res.data});
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_WALLETS)});
    hanldeError(error);
  }
}
function* getTransactionsHistorySaga() {
  try {
    const res = yield API.get('external/get-transaction-history');

    if (res.statusCode === 200) {
      yield put({
        type: _onSuccess(Actions.GET_TRANSACTIONS_HISTORY),
        data: res.data,
      });
    }
  } catch (error) {
    yield put({type: _onFail(Actions.GET_TRANSACTIONS_HISTORY)});
    hanldeError(error);
  }
}

export function* watchTuitionSaga() {
  yield takeLatest(Actions.GET_WALLETS, getWalletsSaga);
  yield takeLatest(
    Actions.GET_TRANSACTIONS_HISTORY,
    getTransactionsHistorySaga,
  );
}
