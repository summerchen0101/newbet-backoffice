import { sampleReducer } from './sample/reducers';
import managerReducer from './manager/reducer';
import onlineReducer from './online/reducer';
import accountReducer from './account/reducer';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  account: accountReducer,
  manager: managerReducer,
  online: onlineReducer,
  sample: sampleReducer,
};

export type RootState = {
  account: ReturnType<typeof accountReducer>;
  manager: ReturnType<typeof managerReducer>;
  online: ReturnType<typeof onlineReducer>;
  sample: ReturnType<typeof sampleReducer>;
};

export default configureStore({ reducer });
