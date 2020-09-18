export interface IInitialState {
  counter: number
}

const initialState: IInitialState = {
  counter: 200
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'ADD_COUNTER':
      return {...state, counter: state.counter + action.value}
    case 'SUB_COUNTER':
      return {...state, counter: state.counter - action.value}

  }
  return state
}
