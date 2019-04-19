import React, { Component } from "react";

import { getFrontpagePopular } from "./actions/moviesActions";

import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onApiRequest();
  }
  render() {
    return (
      <div>
        <h1>Movie app</h1>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    movies: state.movies
  };
};

const mapActionsToProps = {
  getFrontpagePopular: getFrontpagePopular
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
