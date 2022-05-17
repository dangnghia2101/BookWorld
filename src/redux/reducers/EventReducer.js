import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const listEvent = (...props) => {
  return reducerDefault(...props, Actions.FETCH_EVENT);
};

export const listEventHighLight = (...props) => {
  return reducerDefault(...props, Actions.FETCH_EVENT_HIGHLIGHT);
};
export const joinEvent = (...props) => {
  return reducerDefault(...props, Actions.JOIN_EVENT);
};
export const checkinEvent = (...props) => {
  return reducerDefault(...props, Actions.CHECKIN_EVENT);
};
export const searchEvent = (...props) => {
  return reducerDefault(...props, Actions.SEARCH_EVENT);
};
export const getEventById = (...props) => {
  return reducerDefault(...props, Actions.GET_EVENT_BY_ID);
};
export const getListPost = (...props) => {
  return reducerDefault(...props, Actions.LIST_POSTS);
};
export const getDetailPost = (...props) => {
  return reducerDefault(...props, Actions.DETAIL_POST);
};
export const EventReducer = {
  listEvent,
  listEventHighLight,
  joinEvent,
  checkinEvent,
  searchEvent,
  getEventById,
  getListPost,
  getDetailPost,
};
