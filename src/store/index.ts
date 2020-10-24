import { sampleReducer } from './sample/reducers';
import manager from './manager';
import online from './online';
import account from './account';
import shareAccount from './shareAccount';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  manager,
  online,
  account,
  shareAccount,
  sample: sampleReducer,
};

export type RootState = {
  account: ReturnType<typeof account>;
  manager: ReturnType<typeof manager>;
  online: ReturnType<typeof online>;
  shareAccount: ReturnType<typeof shareAccount>;
  sample: ReturnType<typeof sampleReducer>;
};

export default configureStore({ reducer });
