import * as actionTypes from "./actionTypes"

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  }
}

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    payload: value,
  }
}

export const substract = (result) => {
  return {
    type: actionTypes.SUBSTRACT,
    payload: result,
  }
}
