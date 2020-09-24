import * as actionType from './constants';

export const changeLanguage = (lang) => ({
  type: actionType.CHANGE_LANGUAGE,
  lang,
});
