import * as actionTypes from "../actions/actionTypes"

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
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case actionTypes.ADD:
      return {
        // actio.payload => nama payload mesti sama di dengan yang di counter.js di mapDispatchToProps
        ...state,
        counter: state.counter + payload, //payload disini dari file Counter.js
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - payload, //payload disini dari file Counter.js
      }
    default:
      return state
  }
}

export default counterReducer

// axios.post("url", payload)
