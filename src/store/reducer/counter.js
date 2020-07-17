import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../utility"

const insitialState = {
  counter: 0,
}

const counterReducer = (state = insitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.INCREMENT:
      // ini cara yang sama dalam melakukan manipulasi initialState
      // tapi kita tidak akan menggunakan cara ini dan bukan ini yang mau di lakukan
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // return newState;
      // return {
      //   ...state,
      //   counter: state.counter + 1,
      // }
      return updateObject(state, { counter: state.counter + 1 })
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 })
    // return {
    //   ...state,
    //   counter: state.counter - 1,
    // }
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + payload })
    // return {
    //   // actio.payload => nama payload mesti sama di dengan yang di counter.js di mapDispatchToProps
    //   ...state,
    //   counter: state.counter + payload, //payload disini dari file Counter.js
    // }
    case actionTypes.SUBSTRACT:
      return updateObject(state, { counter: state.counter - payload })
    // return {
    //   ...state,
    //   counter: state.counter - payload, //payload disini dari file Counter.js
    // }
    default:
      return state
  }
}

export default counterReducer

// axios.post("url", payload)
