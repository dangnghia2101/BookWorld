import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';
export const walletsReducer = (...props) => {
  return reducerDefault(...props, Actions.GET_WALLETS);
};
export const transactionsHistoryReducer = (...props) => {
  return reducerDefault(...props, Actions.GET_TRANSACTIONS_HISTORY);
};
export const TuitionReducer = {
  walletsReducer,
  transactionsHistoryReducer,
};
