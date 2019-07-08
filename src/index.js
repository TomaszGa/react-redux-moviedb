import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import singleMovieReducer from "./reducers/singleMovieReducer";
import searchReducer from "./reducers/searchReducer";
import exploreReducer from "./reducers/exploreReducer";

const combinedReducers = combineReducers({
  singleMovie: singleMovieReducer,
  search: searchReducer,
  explore: exploreReducer
});

const initialState = {
  search: {
    showSearchResultsList: false
  },
  singleMovie: {
    singlePosterLoaded: false,
    singleMovieError: false
  }
};

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
