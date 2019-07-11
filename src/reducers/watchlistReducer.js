const watchlistReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_WATCHLIST_MOVIE": {
      const clonedState = [...state];
      clonedState.push(payload.movieId);
      return clonedState;
    }
    case "REMOVE_WATCHLIST_MOVIE": {
      const clonedState = [...state];
      const filteredArray = clonedState.filter(val => {
        return val !== payload.movieId;
      });
      return filteredArray;
    }
    default:
      return state;
  }
};

export default watchlistReducer;
