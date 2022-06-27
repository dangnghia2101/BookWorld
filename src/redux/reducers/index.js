import {combineReducers} from 'redux';
import {UserReducer} from './UserReducer';
import {BookReducer} from './BookReducer';
import {AuthorReducer} from './AuthorReducer';
import {NotificationReducer} from './NotificationReducer';
import {handlerLoadingReducer} from './HandlerLoadingReducer';

const rootReducer = combineReducers({
  ...UserReducer,
  ...BookReducer,
  ...AuthorReducer,
  ...NotificationReducer,
  handlerLoadingReducer,
});

export default rootReducer;
