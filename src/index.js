import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import counterReducer from "./store/reducer/counter"
import resultReducer from "./store/reducer/result"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const rootReducer = combineReducers({
  COUNTER: counterReducer,
  RESULT: resultReducer,
})

// const rootReducer = combineReducers({ COUNTER, resultReducer })
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action)
      const result = next(action)
      console.log("[Middleware] next state", store.getState())
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // for using redux tooll dev

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
