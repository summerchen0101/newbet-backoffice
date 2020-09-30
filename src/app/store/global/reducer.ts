import { combineReducers } from 'redux';
import basicReducer from 'app/store/global/Basic/reducer';
import userReducer from 'app/store/global/User/reducer';
import menuReducer from 'app/store/global/Menu/reducer';

export default combineReducers({
  userStore: userReducer,
  menuStore: menuReducer,
  basic: basicReducer,
});
