const singleMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_SINGLE_MOVIE": {
      return {
        ...state,
        singleMovieData: payload.singleMovieData
      };
    }
    case "CLEAR_SINGLE_MOVIE": {
      return {
        ...state,
        singleMovieData: null,
        singlePosterLoaded: null
      };
    }
    case "SINGLE_POSTER_LOADED": {
      return {
        ...state,
        singlePosterLoaded: true
      };
    }
    default:
      return state;
  }
};

export default singleMovieReducer;
