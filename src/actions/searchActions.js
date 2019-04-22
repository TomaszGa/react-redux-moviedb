import keys from "../keys";

export function getSearchResults(searchString) {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${
        keys.apiKey
      }`
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setSearchResults(responseJson));
      })
      .catch(error => {});
  };
}

export function setSearchResults(searchResults) {
  console.log(searchResults);
  return {
    type: "SET_SEARCH_RESULTS",
    payload: {
      searchResults: searchResults
    }
  };
}
