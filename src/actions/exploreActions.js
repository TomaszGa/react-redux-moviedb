import keys from "../keys";

export function getExploreMovies(topic, query) {
  return dispatch => {
    let searchParameter = null;
    switch (topic) {
      case "actor":
        searchParameter = "with_cast";
        break;
      case "genre":
        searchParameter = "with_genres";
        break;
      default:
    }

    fetch(
      `https://api.themoviedb.org/3/discover/movie?${searchParameter}=${query}&api_key=${
        keys.apiKey
      }`
    )
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        dispatch(setExploreMovies(responseJson));
      })
      .catch(error => {});
  };
}

export function setExploreMovies(exploreMovieData) {
  return {
    type: "SET_EXPLORE_MOVIES",
    payload: {
      exploreMovieData: exploreMovieData
    }
  };
}
