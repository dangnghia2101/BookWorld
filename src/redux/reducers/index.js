import {combineReducers} from 'redux';
import {UserReducer} from './UserReducer';
import {BookReducer} from './BookReducer';
import {AuthorReducer} from './AuthorReducer';

const rootReducer = combineReducers({
  ...UserReducer,
  ...BookReducer,
  ...AuthorReducer,
});

export default rootReducer;
