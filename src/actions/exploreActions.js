import keys from "../keys";
import { clearSingleMovie } from "./singleMovieActions";

export function getExploreMovies(topic, query) {
  return dispatch => {
    dispatch(clearSingleMovie());
    dispatch(clearActorInfo());
    dispatch(clearExploreMovies());
    let searchParameter = null;
    switch (topic) {
      case "actor":
        searchParameter = "with_cast";
        dispatch(getActorInfo(query));
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

export function clearExploreMovies() {
  return {
    type: "CLEAR_EXPLORE_MOVIES"
  };
}

export function getActorInfo(actorId) {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${keys.apiKey}`
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setActorInfo(responseJson));
      })
      .catch(error => {
        console.log("actor info fetch error");
      });
  };
}

export function setActorInfo(actorInfoData) {
  return {
    type: "SET_ACTOR_INFO",
    payload: {
      actorInfoData: actorInfoData
    }
  };
}

export function clearActorInfo() {
  return {
    type: "CLEAR_ACTOR_INFO"
  };
}
