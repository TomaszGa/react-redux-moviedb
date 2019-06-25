import keys from "../keys";

export function getSingleMovie(id) {
  return dispatch => {
    dispatch(clearSingleCast());

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
    dispatch(clearSingleError());

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${keys.apiKey}`)
      .then(response => response.json())
      .then(responseJson => {
        //disable spinner if response arrived under 200ms
        timeoutCheck = false;

        //if not found (status code 34) set error status
        if (responseJson.status_code && responseJson.status_code === 34) {
          dispatch(setSingleError());
        } else {
          dispatch(setSingleMovie(responseJson));
        }
      })
      .catch(error => {
        console.log("single movie fetch failed");
        dispatch(setSingleError());
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=17347cee537e6708466d904c0de876d7`
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setSingleCast(responseJson));
      })
      .catch(error => {
        console.log("single movie cast fetch failed");
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
  console.log("clearing single movie!!");
  return {
    type: "CLEAR_SINGLE_MOVIE"
  };
}

export function setSingleError() {
  return {
    type: "SET_SINGLE_ERROR"
  };
}

export function clearSingleError() {
  return {
    type: "CLEAR_SINGLE_ERROR"
  };
}

export function setSingleCast(singleMovieCastData) {
  return {
    type: "SET_SINGLE_CAST",
    payload: {
      singleMovieCastData: singleMovieCastData
    }
  };
}

export function clearSingleCast() {
  return {
    type: "CLEAR_SINGLE_CAST"
  };
}
