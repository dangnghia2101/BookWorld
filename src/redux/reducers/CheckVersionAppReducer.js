import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const checkVersionApp = (...props) => {
  return reducerDefault(...props, Actions.CHECK_VERSION_APP);
};
