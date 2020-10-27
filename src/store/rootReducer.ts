import { sampleReducer } from './sample/reducers';
import account from './account';
import shareAccount from './shareAccount';

export default {
  account,
  shareAccount,
  sample: sampleReducer,
};

export type RootState = {
  account: ReturnType<typeof account>;
  shareAccount: ReturnType<typeof shareAccount>;
  sample: ReturnType<typeof sampleReducer>;
};
