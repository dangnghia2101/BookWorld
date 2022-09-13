import {combineReducers} from 'redux';
import {UserReducer} from './UserReducer';
import {BookReducer} from './BookReducer';
import {AuthorReducer} from './AuthorReducer';
import {NotificationReducer} from './NotificationReducer';
import {handlerLoadingReducer} from './HandlerLoadingReducer';
import {ThemeReducer} from './ThemeReducer';

const rootReducer = combineReducers({
  ...UserReducer,
  ...BookReducer,
  ...AuthorReducer,
  ...NotificationReducer,
  handlerLoadingReducer,
  ...ThemeReducer,
});

export default rootReducer;
