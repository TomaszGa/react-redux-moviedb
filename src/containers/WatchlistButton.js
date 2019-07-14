import React, { Component } from "react";
import { connect } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import styled from "styled-components";

import {
  addWatchlistMovie,
  removeWatchlistMovie
} from "../actions/watchlistActions";

class WatchlistButton extends Component {
  render() {
    const { watchlistMovies, movieId } = this.props;

    let output = null;

    // console.log(watchlistMovies, movieId);

    if (watchlistMovies.includes(movieId)) {
      output = (
        <div onClick={() => this.props.removeWatchlistMovie(movieId)}>
          <FaRegHeart />
        </div>
      );
    } else {
      output = (
        <div onClick={() => this.props.addWatchlistMovie(movieId)}>
          <FaHeart />
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return { watchlistMovies: state.watchlist };
};

const mapDispatchToProps = {
  addWatchlistMovie: addWatchlistMovie,
  removeWatchlistMovie: removeWatchlistMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistButton);
