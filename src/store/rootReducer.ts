import { sampleReducer } from './sample/reducers';
import online from './online';
import account from './account';
import shareAccount from './shareAccount';

export default {
  online,
  account,
  shareAccount,
  sample: sampleReducer,
};

export type RootState = {
  account: ReturnType<typeof account>;
  online: ReturnType<typeof online>;
  shareAccount: ReturnType<typeof shareAccount>;
  sample: ReturnType<typeof sampleReducer>;
};
