//configuration with node

const redux = require("redux"); // need require to redux frist
const creatStore = redux.createStore; //this is function

//initial state
const initialState = { counter: 0 };

//reducer
const rootReducer = (state = initialState, action) => {

	const {type, playload} = action

	if (action.type === "INC_COUNTER") {
		return {
			...state, //first copy the old state
			counter: state.counter + 1, //overwrite in here one property which you want to overwrite
		};
	} else if (action.type === "ADD_COUNTER") {
		return {
			...state, //first copy the old state
			counter: state.counter + action.payload, //overwrite in here one property which you want to overwrite
		};
	}
	return state;
};

//store
const store = creatStore(rootReducer);
console.log(store.getState());

//subscribe => di set up sebelum store di buat 
store.subscribe(() => {
	console.log("[Subscription]", store.getState());
});

// kenapa subscribe bisa jalan ? karena di trigger sama dispatch 
// dan akan di trigger terus apabila ada state yang update


//dispatch
store.dispatch({
	type: "INC_COUNTER",
});
store.dispatch({
	type: "ADD_COUNTER",
	payload: 10,
});
console.log(store.getState());

// subscription
// => using for make store data automatic without using "store.getState()" like this
// store.subscribe(() => {
// 	console.log("[Subscription]", store.getState());
// });
