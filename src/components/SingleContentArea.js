import React from "react";
import styled from "styled-components";

import NavList from "./NavList";
import SingleInfoBoxes from "./SingleInfoBoxes";
import WatchlistButton from "../containers/WatchlistButton";

const TextBox = styled.div`
  padding: 30px;
  color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const MovieHeading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  width: 80%;
  margin-bottom: 0;
`;

const MovieSubheading = styled.h2`
  color: #01d277;
`;

const MovieDescription = styled.p`
  margin-bottom: 30px;
`;

const SingleTextArea = props => {
  return (
    <TextBox>
      <TitleContainer>
        <MovieHeading>{props.singleMovieData.original_title}</MovieHeading>
        <WatchlistButton
          movieId={props.singleMovieData.id}
          iconSize={32}
          containerHeight={38}
        />
      </TitleContainer>
      <MovieSubheading>{props.singleMovieData.tagline}</MovieSubheading>
      <MovieDescription>{props.singleMovieData.overview}</MovieDescription>
      <NavList
        data={props.singleMovieData.genres}
        baseUrl={"/explore/genre/"}
      />
      <SingleInfoBoxes data={props.singleMovieData} />
      {props.castData ? (
        <NavList data={props.castData} baseUrl={"/explore/actor/"} />
      ) : null}
    </TextBox>
  );
};

export default SingleTextArea;
