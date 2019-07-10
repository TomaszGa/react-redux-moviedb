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

    const fetchURL = `https://api.themoviedb.org/3/discover/movie?${searchParameter}=${query}&api_key=${
      keys.apiKey
    }`;

    fetch(fetchURL)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(
          setPaginationData(
            fetchURL,
            responseJson.page,
            responseJson.total_pages
          )
        );
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

export function getInfiniteScrollMovies(topic, query) {
  return (dispatch, getState) => {
    const { explore } = getState();
    if (explore.currentPage >= explore.totalPages) {
      return;
    }

    const fetchURL =
      explore.paginationURL + "&page=" + (explore.currentPage + 1);
    dispatch(startInfiniteScrollLoading());
    fetch(fetchURL)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(endInfiniteScrollLoading());
        dispatch(
          setPaginationData(
            explore.paginationURL,
            responseJson.page,
            responseJson.total_pages
          )
        );
        dispatch(appendExploreMovies(responseJson));
      })
      .catch(error => {});
  };
}

export function appendExploreMovies(updatedMovieData) {
  return {
    type: "APPEND_EXPLORE_MOVIES",
    payload: {
      updatedMovieData: updatedMovieData
    }
  };
}

export function startInfiniteScrollLoading() {
  console.log("infinite scroll loading start");
  return {
    type: "INFINITE_SCROLL_LOADING_START"
  };
}

export function endInfiniteScrollLoading() {
  console.log("infinite scroll loading end");
  return {
    type: "INFINITE_SCROLL_LOADING_END"
  };
}

export function clearExploreMovies() {
  return {
    type: "CLEAR_EXPLORE_MOVIES"
  };
}

export function setPaginationData(paginationURL, currentPage, totalPages) {
  return {
    type: "SET_PAGINATION_DATA",
    payload: {
      paginationURL: paginationURL,
      currentPage: currentPage,
      totalPages: totalPages
    }
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
