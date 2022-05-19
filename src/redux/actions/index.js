export default {
  INFOR_USER: 'INFOR_USER',
  FETCH_DEPARTMENTS: 'FETCH_DEPARTMENTS',
  IS_LOADING: 'IS_LOADING',
  LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  IS_LOGIN: 'IS_LOGIN',
  DISTANCE_LOCATION: 'DISTANCE_LOCATION',
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
};

export const _onSuccess = action => action + '_SUCCESS';
export const _onFail = action => action + '_FAIL';
export const _onUnmount = action => action + '_UNMOUNT';
