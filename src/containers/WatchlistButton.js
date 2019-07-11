import React, { Component } from "react";
import { connect } from "react-redux";
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
          <svg
            aria-hidden="true"
            focusable="false"
            width="1.17em"
            height="1em"
            viewBox="0 0 1792 1536"
          >
            <path
              d="M896 1536q-26 0-44-18L228 916q-10-8-27.5-26T145 824.5 77 727 23.5 606 0 468q0-220 127-344T478 0q62 0 126.5 21.5t120 58T820 148t76 68q36-36 76-68t95.5-68.5 120-58T1314 0q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
              fill="#626262"
            />
          </svg>
        </div>
      );
    } else {
      output = (
        <h1 onClick={() => this.props.addWatchlistMovie(movieId)}>not found</h1>
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
