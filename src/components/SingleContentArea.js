import React from "react";
import styled from "styled-components";

import NavList from "./NavList";
import SingleInfoBoxes from "./SingleInfoBoxes";

const TextBox = styled.div`
  width: 55%;
  height: 100%;
  padding: 30px;
  color: #fff;
`;

const MovieHeading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 4px;
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
      <MovieHeading>{props.singleMovieData.original_title}</MovieHeading>
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
