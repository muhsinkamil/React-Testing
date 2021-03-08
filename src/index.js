import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "Components/App"
import { createStore, compose } from "redux"
import { Provider } from "react-redux"
import reducers from "Reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
