import React, { Component } from "react";
import { connect } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

import styled from "styled-components";

import {
  addWatchlistMovie,
  removeWatchlistMovie
} from "../actions/watchlistActions";

const IconContainer = styled.div`
  ${({ containerHeight }) => containerHeight && `height: ${containerHeight}px`}
  display: flex;
  align-items: center;
`;

class WatchlistButton extends Component {
  render() {
    const { watchlistMovies, movieId, iconSize, containerHeight } = this.props;

    let output = null;

    // console.log(watchlistMovies, movieId);

    if (watchlistMovies.includes(movieId)) {
      output = (
        <IconContainer
          containerHeight={containerHeight}
          onClick={() => this.props.removeWatchlistMovie(movieId)}
        >
          <FaBookmark size={iconSize} />
        </IconContainer>
      );
    } else {
      output = (
        <IconContainer
          containerHeight={containerHeight}
          onClick={() => this.props.addWatchlistMovie(movieId)}
        >
          <FaRegBookmark size={iconSize} />
        </IconContainer>
      );
    }

    return <>{output}</>;
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
