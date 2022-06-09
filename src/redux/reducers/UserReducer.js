import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const login = (...props) => {
  return reducerDefault(...props, 'LOGIN');
};

export const logout = (...props) => {
  return reducerDefault(...props, Actions.LOGOUT_ACCOUNT);
};

export const isLogin = (...props) => {
  return reducerDefault(...props, Actions.IS_LOGIN);
};

export const UserReducer = {
  login,
  logout,
  isLogin,
};
