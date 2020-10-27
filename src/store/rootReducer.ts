import { sampleReducer } from './sample/reducers';

export default {
  sample: sampleReducer,
};

export type RootState = {
  sample: ReturnType<typeof sampleReducer>;
};
