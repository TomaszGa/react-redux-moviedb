import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import frontpageReducer from "./reducers/frontpageReducer";

const combinedReducers = combineReducers({
  frontpageMovies: frontpageReducer
});

const initialState = {};

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
