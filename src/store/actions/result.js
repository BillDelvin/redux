import * as actionTypes from "./actionTypes"

const saveResult = (value) => {
  // for change data ini here can
  return {
    type: actionTypes.STORE_RESULT,
    payload: value,
  }
}

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000)
  }
}

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: id,
  }
}
