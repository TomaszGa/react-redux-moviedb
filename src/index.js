import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

// import Typography from "typography";
// import fairyGatesTheme from "typography-theme-fairy-gates";

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import frontpageReducer from "./reducers/frontpageReducer";
import singleMovieReducer from "./reducers/singleMovieReducer";
import searchReducer from "./reducers/searchReducer";

const combinedReducers = combineReducers({
  frontpageMovies: frontpageReducer,
  singleMovie: singleMovieReducer,
  search: searchReducer
});

const initialState = {
  search: {
    showSearchResultsList: false
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
