import * as actionTypes from "../actions/actionTypes"

const insitialState = {
  result: [],
}

const resultReducer = (state = insitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.STORE_RESULT:
      // change data can here
      return {
        ...state,
        result: state.result.concat({ id: new Date(), payload }), // dont use push(), why ? push() can manipulate the original state
      }
    case actionTypes.DELETE_RESULT:
      // not using this way
      // const id = 2
      // const newArray = [...state.result]
      // state.result.splice(id, 1)
      // console.log(payload) => payload yang disini adalah payload yang isi nya id yang dikirim dari counter.js
      const updateNewArray = state.result.filter((result) => result.id !== payload)
      return {
        ...state,
        result: updateNewArray,
      }
    default:
      return state
  }
}

export default resultReducer
