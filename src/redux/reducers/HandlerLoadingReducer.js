import {SHOW, HIDE} from '../actions/HandlerLoading';

const stateDefault = {
  isShow: false,
};

export const handlerLoadingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SHOW:
      return {isShow: true};
    case HIDE:
      return {isShow: false};
    default:
      return state;
  }
};
