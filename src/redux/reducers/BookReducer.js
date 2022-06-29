import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const getAllBook = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_BOOK);
};

export const getAllBookByCategory = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_BOOK_BY_CATEGORY);
};

export const getAllChapterBookById = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_CHAPTER_BY_ID);
};

export const getAllCategory = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_CATEGORY);
};

export const BookReducer = {
  getAllBook,
  getAllCategory,
  getAllChapterBookById,
  getAllBookByCategory,
};
