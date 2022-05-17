import {reducerDefault} from '@redux/common/reducers';
import Actions from '../actions';

export const roomEvent = (...props) => {
  return reducerDefault(...props, Actions.ROOM_EVENT);
};

export const listRoom = (...props) => {
  return reducerDefault(...props, Actions.LIST_ROOM);
};
export const RoomEventReducer = {
  roomEvent,
  listRoom,
};
