import React from "react";
import genreMasterList from "../data/genres";

const ExploreGenreHeader = props => {
  let genreName = null;

  const genreMatch = genreMasterList.find(x => {
    return x.id === Number(props.genre);
  });

  if (genreMatch) {
    genreName = genreMatch.name;
  }

  return <div>{<h1>{genreName}</h1>}</div>;
};

export default ExploreGenreHeader;
