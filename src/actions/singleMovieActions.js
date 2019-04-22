import keys from "../keys";

export function getSingleMovie(id) {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${keys.apiKey}`)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setSingleMovie(responseJson));
      })
      .catch(error => {});
  };
}

export function setSingleMovie(singleMovieData) {
  return {
    type: "SET_SINGLE_MOVIE",
    payload: {
      singleMovieData: singleMovieData
    }
  };
}
