const frontpageReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_FRONTPAGE_MOVIES": {
      return {
        ...state,
        movies: payload.movies
      };
    }
    default:
      return state;
  }
};

export default frontpageReducer;
