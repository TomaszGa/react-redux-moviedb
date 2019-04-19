import keys from "../keys";

export function getFrontpagePopular() {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${
        keys.apiKey
      }`
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        dispatch(setFrontpagePopular(responseJson));
      })
      .catch(error => {});
  };
}

export function setFrontpagePopular(popular) {
  return {
    type: "SET_FRONTPAGE_POPULAR",
    payload: {
      popular: popular
    }
  };
}
