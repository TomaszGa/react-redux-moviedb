const exploreReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_EXPLORE_MOVIES": {
      return {
        ...state,
        exploreMovieData: payload.exploreMovieData
      };
    }

    case "CLEAR_EXPLORE_MOVIES": {
      return {
        ...state,
        exploreMovieData: null
      };
    }

    case "SET_ACTOR_INFO": {
      return {
        ...state,
        actorInfo: payload.actorInfoData
      };
    }

    case "CLEAR_ACTOR_INFO": {
      return {
        ...state,
        actorInfo: null
      };
    }

    default:
      return state;
  }
};

export default exploreReducer;
