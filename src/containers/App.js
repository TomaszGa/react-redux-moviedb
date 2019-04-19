import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import FeaturedMovie from "../components/FeaturedMovie";

import { getFrontpagePopular } from "../actions/moviesActions";

class App extends Component {
  componentDidMount() {
    this.props.getFrontpagePopular();
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.frontpagePopularMovies ? (
          <FeaturedMovie movie={this.props.frontpagePopularMovies.results[0]} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    frontpagePopularMovies: state.frontpageMovies.frontpagePopularMovies
  };
};

const mapActionsToProps = {
  getFrontpagePopular: getFrontpagePopular
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
