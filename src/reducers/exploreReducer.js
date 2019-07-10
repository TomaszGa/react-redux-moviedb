const exploreReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_EXPLORE_MOVIES": {
      return {
        ...state,
        exploreMovieData: payload.exploreMovieData
      };
    }

    case "APPEND_EXPLORE_MOVIES": {
      return {
        ...state,
        exploreMovieData: {
          ...state.exploreMovieData,
          results: [
            ...state.exploreMovieData.results,
            ...payload.updatedMovieData.results
          ]
        }
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

    case "SET_PAGINATION_DATA": {
      return {
        ...state,
        paginationURL: payload.paginationURL,
        currentPage: payload.currentPage,
        totalPages: payload.totalPages
      };
    }

    case "INFINITE_SCROLL_LOADING_START": {
      return {
        ...state,
        infiniteScrollLoading: true
      };
    }
    case "INFINITE_SCROLL_LOADING_END": {
      return {
        ...state,
        infiniteScrollLoading: false
      };
    }

    default:
      return state;
  }
};

export default exploreReducer;
