import { reducerDefault } from '@redux/common/reducers';
import Actions from '../actions';

export const changeTheme = (...props) => {
  return reducerDefault(...props, Actions.CHANGE_THEME);
};

export const ThemeReducer = {
  changeTheme,
};
