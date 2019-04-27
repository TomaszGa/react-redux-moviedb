import keys from "../keys";

export function getSingleMovie(id) {
  return dispatch => {
    let timeoutCheck = true;
    setTimeout(() => {
      if (timeoutCheck) {
        dispatch(clearSingleMovie());
      }
    }, 200);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${keys.apiKey}`)
      .then(response => response.json())
      .then(responseJson => {
        timeoutCheck = false;
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

export function singlePosterLoaded() {
  return {
    type: "SINGLE_POSTER_LOADED"
  };
}

export function clearSingleMovie() {
  return {
    type: "CLEAR_SINGLE_MOVIE",
    payload: {
      singleMovieData: null
    }
  };
}
