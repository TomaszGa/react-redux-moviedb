const singleMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_SINGLE_MOVIE": {
      return {
        ...state,
        singleMovieData: payload.singleMovieData
      };
    }
    default:
      return state;
  }
};

export default singleMovieReducer;
