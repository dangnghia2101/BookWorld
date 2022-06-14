import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const getAllBook = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_BOOK);
};

export const getAllCategory = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_CATEGORY);
};

export const BookReducer = {getAllBook, getAllCategory};
