import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';
export const smsReducer = (...props) => {
  return reducerDefault(...props, Actions.GET_LIST_PHONE);
};
