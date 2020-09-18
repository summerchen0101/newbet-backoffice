import {ADD_COUNTER, SUB_COUNTER} from './constants'

export const addCounter = (num: number) => {
  return {
    type: ADD_COUNTER,
    value: num
  }
}

export const subCounter = (num: number) => {
  return {
    type: SUB_COUNTER,
    value: num
  }
}

