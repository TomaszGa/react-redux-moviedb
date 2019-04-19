const frontpageReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_FRONTPAGE_POPULAR": {
      return {
        ...state,
        frontpagePopularMovies: payload.popular
      };
    }
    default:
      return state;
  }
};

export default frontpageReducer;
