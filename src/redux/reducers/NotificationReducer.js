import {reducerDefault} from '@redux/common/reducers';
import Actions from '@redux/actions';

export const notificationPrivateNotRead = (...props) => {
  return reducerDefault(...props, Actions.GET_NOTIFICATION_PRIVATE_READ);
};

export const getListNotification = (...props) => {
  return reducerDefault(...props, Actions.GET_LIST_NOTIFICATION);
};

export const NotificationReducer = {
  notificationPrivateNotRead,
  getListNotification,
};
