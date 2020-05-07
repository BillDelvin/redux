import React, { Component } from "react"
import { connect } from "react-redux"
import * as actionTypes from "../../store/actions"
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
          {this.props.storeResult.map((data, id) => {
            console.log(data)
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
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCoutner: () => dispatch({ type: actionTypes.ADD, payload: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, payload: 15 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

