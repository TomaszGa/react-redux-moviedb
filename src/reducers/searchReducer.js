const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_SEARCH_RESULTS": {
      return {
        ...state,
        searchResults: payload.searchResults
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
