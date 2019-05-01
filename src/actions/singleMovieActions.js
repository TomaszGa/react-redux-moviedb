import keys from "../keys";

export function getSingleMovie(id) {
  return dispatch => {
    let timeoutCheck = true;
    /*
     * only display loading spinner if loading has gone for 300ms to prevent bad visual effect on fast load
     * on a fast connection a quick change of text and images is better
     */

    setTimeout(() => {
      if (timeoutCheck) {
        dispatch(clearSingleMovie());
      }
    }, 300);

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${keys.apiKey}`)
      .then(response => response.json())
      .then(responseJson => {
        //disable spinner if response arrived under 200ms
        timeoutCheck = false;

        dispatch(setSingleMovie(responseJson));
      })
      .catch(error => {
        console.log("single movie fetch failed");
      });
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
