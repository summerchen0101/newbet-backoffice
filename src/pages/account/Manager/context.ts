import {createContext, Dispatch} from 'react'

type ContentType = {
  state: any;
  dispatch: Dispatch<any>
}

const context: ContentType = {
  state: {},
  dispatch: () => {}
}

export default createContext(context)
