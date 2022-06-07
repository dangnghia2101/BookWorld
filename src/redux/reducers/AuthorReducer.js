import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const getAllAuthor = (...props) => {
  return reducerDefault(...props, Actions.GET_ALL_AUTHOR);
};

export const AuthorReducer = {getAllAuthor};
