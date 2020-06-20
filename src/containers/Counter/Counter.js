import React, { Component } from "react"
import { connect } from "react-redux"
import * as actionCreator from "../../store/actions/index"
import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"

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
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.storeResult.map((data) => {
            return (
              <li key={data.id} onClick={() => this.props.onDeleteResult(data.id)}>
                {data.payload}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //state yang disini di ambil dari initialState yang ada di reducer.js
    // counter yang disini sebagai key nya akan di pakai di dalam class Counter tersebut
    // disini harus harus mengakses key(counter) dari global punya yang ada di index.js
    counter: state.COUNTER.counter,
    storeResult: state.RESULT.result,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // ini di panggil ke button
    onIncrementCounter: () => dispatch(actionCreator.increment()),
    onDecrementCounter: () => dispatch(actionCreator.decrement()),
    onAddCoutner: () => dispatch(actionCreator.add(10)),
    onSubtractCounter: () => dispatch(actionCreator.substract(15)),
    onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
