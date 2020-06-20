import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../utility"

const insitialState = {
  result: [],
}

const deleteResult = (state, payload) => {
  const updateNewArray = state.result.filter((result) => result.id !== payload)
  return updateObject(state, { result: updateNewArray })
}

const resultReducer = (state = insitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.STORE_RESULT:
      // change data can here
      // return {
      //   ...state,
      //   result: state.result.concat({ id: new Date(), payload }), // dont use push(), why ? push() can manipulate the original state
      // }
      return updateObject(state, { result: state.result.concat({ id: new Date(), payload }) })
    case actionTypes.DELETE_RESULT:
      // not using this way
      // const id = 2
      // const newArray = [...state.result]
      // state.result.splice(id, 1)
      // console.log(payload) => payload yang disini adalah payload yang isi nya id yang dikirim dari counter.js
      // const updateNewArray = state.result.filter((result) => result.id !== payload) // code move to top
      // return {
      //   ...state,
      //   result: updateNewArray,
      // }
      return deleteResult(state, payload)
    default:
      return state
  }
}

export default resultReducer
