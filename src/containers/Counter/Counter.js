import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
	render() {
		return (
			<div>
				<CounterOutput value={this.props.counter} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 10" clicked={this.props.onAddCoutner} />
				<CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
				<hr />
				<button onClick={this.props.onStoreResult}>Store Result</button>
				<ul>
					{this.props.storeResult.map((data, id) => {
						console.log(data);
						return (
							<li key={id} onClick={this.props.onDeleteResult}>
								{data.payload}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		//state yang disini di ambil dari initialState yang ada di reducer.js
		// counter yang disini sebagai key nya akan di pakai di dalam class Counter tersebut
		counter: state.counter,
		storeResult: state.result,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// ini di panggil ke button
		onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
		onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
		onAddCoutner: () => dispatch({ type: "ADD", payload: 10 }),
		onSubtractCounter: () => dispatch({ type: "SUBTRACT", payload: 15 }),
		onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
		onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
