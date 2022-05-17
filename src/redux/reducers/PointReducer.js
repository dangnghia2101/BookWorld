import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const listAllDetailSemester = (...props) => {
  return reducerDefault(...props, Actions.FETCH_ALL_DETAIL_SEMESTER);
};

export const listPointSemester = (...props) => {
  return reducerDefault(...props, Actions.FETCH_POINT_SEMESTER);
};

export const PointReducer = {
  listAllDetailSemester,
  listPointSemester,
};
