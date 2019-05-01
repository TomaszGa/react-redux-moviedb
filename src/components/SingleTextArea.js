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
  margin-top: 0;
  color: #fff;
`;

const MovieSubheading = styled.h2`
  color: #01d277;
`;

const SingleTextArea = props => {
  return (
    <TextBox>
      <MovieHeading>{props.singleMovieData.original_title}</MovieHeading>
      <MovieSubheading>{props.singleMovieData.tagline}</MovieSubheading>
      <p>{props.singleMovieData.overview}</p>
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
