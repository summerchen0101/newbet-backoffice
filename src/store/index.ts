import { sampleReducer } from './sample/reducers'
import managerReducer from './manager/reducer'
import { configureStore } from '@reduxjs/toolkit'

const reducer = {
  manager: managerReducer,
  sample: sampleReducer
}

export type RootState = {
  manager: ReturnType<typeof managerReducer>,
  sample: ReturnType<typeof sampleReducer>,
}

export default configureStore({ reducer })



