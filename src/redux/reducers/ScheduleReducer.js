import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const listSchedule = (...props) => {
  return reducerDefault(...props, Actions.FETCH_SCHEDULE);
};

export const listTestSchedule = (...props) => {
  return reducerDefault(...props, Actions.FETCH_TEST_SCHEDULE);
};

export const listAllDetailSemester = (...props) => {
  return reducerDefault(...props, Actions.FETCH_ALL_DETAIL_SEMESTER);
};

export const ScheduleReducer = {
  listSchedule,
  listTestSchedule,
  listAllDetailSemester,
};
