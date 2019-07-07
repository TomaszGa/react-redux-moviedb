import React from "react";
import genreMasterList from "../data/genres";
import styled from "styled-components";

const GenreHeading = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;
`;

const ExploreGenreHeader = props => {
  let genreName = null;

  const genreMatch = genreMasterList.find(x => {
    return x.id === Number(props.genre);
  });

  if (genreMatch) {
    genreName = genreMatch.name;
  }

  return <div>{<GenreHeading>{genreName}</GenreHeading>}</div>;
};

export default ExploreGenreHeader;
