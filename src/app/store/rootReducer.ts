import { combineReducers } from 'redux';

import globalReducer from 'app/store/global/reducer';
import langReducer from 'app/store/language/reducer';
import styleReducer from 'app/store/style/reducer';

export default combineReducers({
  global: globalReducer,
  lang: langReducer,
  style: styleReducer,
});
