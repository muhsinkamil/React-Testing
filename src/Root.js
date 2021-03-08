import React from "react"
import { createStore, compose } from "redux"
import { Provider } from "react-redux"
import reducers from "Reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers())

const Root = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}

export default Root
