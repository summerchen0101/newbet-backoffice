import * as actionType from './constants';

export const changeTheme = (theme) => ({
  type: actionType.CHANGE_THEME,
  theme,
});
