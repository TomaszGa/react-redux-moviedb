const exploreReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_EXPLORE_MOVIES": {
      return {
        ...state,
        exploreMovieData: payload.exploreMovieData
      };
    }
    case "SET_ACTOR_INFO": {
      return {
        ...state,
        actorInfo: payload.actorInfoData
      };
    }
    default:
      return state;
  }
};

export default exploreReducer;
