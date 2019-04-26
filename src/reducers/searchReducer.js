const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_SEARCH_RESULTS": {
      return {
        ...state,
        searchResults: payload.searchResults
      };
    }
    case "SHOW_RESULTS_LIST": {
      return {
        ...state,
        showSearchResultsList: true
      };
    }
    case "HIDE_RESULTS_LIST": {
      return {
        ...state,
        showSearchResultsList: false
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
