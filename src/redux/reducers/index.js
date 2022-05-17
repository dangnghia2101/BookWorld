import {combineReducers} from 'redux';
import {handlerSearchReducer} from './HandlerSearchReducer';
import {EventReducer} from './EventReducer';
import {UserReducer} from './UserReducer';
import {RoomEventReducer} from './RoomReducer';
import {NotificationReducer} from './NotificationReducer';
import {handlerLoadingReducer} from './HandlerLoading';
import {checkVersionApp} from './CheckVersionAppReducer';
import {smsReducer} from '@redux/reducers/SmsReducer';
import {ScheduleReducer} from './ScheduleReducer';
import {PointReducer} from './PointReducer';
import NotiSlide from './NotiSlide';
import {TuitionReducer} from '@redux/reducers/TuitionReducer';

const rootReducer = combineReducers({
  ...UserReducer,
  ...EventReducer,
  handlerSearchReducer,
  ...RoomEventReducer,
  ...NotificationReducer,
  handlerLoadingReducer,
  checkVersionApp,
  smsReducer,
  ...TuitionReducer,
  NotiSlide,
  ...ScheduleReducer,
  ...PointReducer,
});

export default rootReducer;
