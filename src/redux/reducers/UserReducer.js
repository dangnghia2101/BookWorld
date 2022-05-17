import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const login = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_ACCOUNT);
};
export const inforUser = (...props) => {
  return reducerDefault(...props, Actions.INFOR_USER);
};

export const listDepartment = (...props) => {
  return reducerDefault(...props, Actions.FETCH_DEPARTMENTS);
};

export const logout = (...props) => {
  return reducerDefault(...props, Actions.LOGOUT_ACCOUNT);
};

export const isLogin = (...props) => {
  return reducerDefault(...props, Actions.IS_LOGIN);
};

export const location = (...props) => {
  return reducerDefault(...props, Actions.DISTANCE_LOCATION);
};
export const UserReducer = {
  login,
  inforUser,
  listDepartment,
  logout,
  isLogin,
  location,
};
