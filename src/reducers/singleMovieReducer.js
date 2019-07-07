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
    case "SET_SINGLE_ERROR": {
      return {
        ...state,
        singleMovieError: true
      };
    }
    case "CLEAR_SINGLE_ERROR": {
      return {
        ...state,
        singleMovieError: false
      };
    }
    case "SET_SINGLE_CAST": {
      return {
        ...state,
        singleMovieCast: payload.singleMovieCastData
      };
    }

    case "CLEAR_SINGLE_CAST": {
      return {
        ...state,
        singleMovieCast: null
      };
    }

    default:
      return state;
  }
};

export default singleMovieReducer;
