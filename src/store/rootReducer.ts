import { sampleReducer } from './sample/reducers';
import shareAccount from './shareAccount';

export default {
  shareAccount,
  sample: sampleReducer,
};

export type RootState = {
  shareAccount: ReturnType<typeof shareAccount>;
  sample: ReturnType<typeof sampleReducer>;
};
