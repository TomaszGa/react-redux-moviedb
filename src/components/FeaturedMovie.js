import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px 15px;
  background-image: url(https://image.tmdb.org/t/p/original/${props => props.backdropPath});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  min-height: 600px;
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  max-width: 600px;
`;

const FeaturedMovie = props => {
  return (
    <Container backdropPath={props.movie.backdrop_path}>
      <TextBox>
        <h1>{props.movie.original_title}</h1>
        <p>{props.movie.overview}</p>
      </TextBox>
    </Container>
  );
};

export default FeaturedMovie;
