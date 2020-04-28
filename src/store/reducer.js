const insitialState = {
	counter: 0,
	result: [],
};

const reducer = (state = insitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "INCREMENT":
			// ini cara yang sama dalam melakukan manipulasi initialState
			// tapi kita tidak akan menggunakan cara ini dan bukan ini yang mau di lakukan
			// const newState = Object.assign({}, state);
			// newState.counter = state.counter + 1;
			// return newState;
			return {
				...state,
				counter: state.counter + 1,
			};
		case "DECREMENT":
			return {
				...state,
				counter: state.counter - 1,
			};
		case "ADD":
			return {
				// actio.payload => nama payload mesti sama di dengan yang di counter.js di mapDispatchToProps
				...state,
				counter: state.counter + payload,
			};
		case "SUBTRACT":
			return {
				...state,
				counter: state.counter - payload,
			};
		case "STORE_RESULT":
			return {
				...state,
				result: state.result.concat({ payload: state.counter }), // dont use push(), why ? push() can manipulate the original state
			};
		default:
			return state;
	}
};

export default reducer;
