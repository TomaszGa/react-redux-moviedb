export function addWatchlistMovie(movieId) {
  return {
    type: "ADD_WATCHLIST_MOVIE",
    payload: {
      movieId: movieId
    }
  };
}

export function removeWatchlistMovie(movieId) {
  return {
    type: "REMOVE_WATCHLIST_MOVIE",
    payload: {
      movieId: movieId
    }
  };
}
