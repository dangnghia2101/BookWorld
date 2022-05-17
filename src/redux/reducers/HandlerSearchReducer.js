import {HANDLE_SEARCH} from '../actions/HandlerSearchAction';

const stateDefault = {
  isShow: false,
};
export const handlerSearchReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case HANDLE_SEARCH:
      return {isShow: !state.isShow};

    default:
      return state;
  }
};
