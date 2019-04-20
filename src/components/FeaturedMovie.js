import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px 15px;
  background: #000;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://image.tmdb.org/t/p/original/${props => props.backdropPath});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  max-width: 850px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const PosterContainer = styled.div`
  width: 45%;
`;

const Poster = styled.img`
  max-width: 100%;
  margin-bottom: 0;
  display: block;
`;

const TextBox = styled.div`
  width: 55%;
  height: 100%;
  padding: 20px;
  color: #fff;
`;

const MovieHeading = styled.h1`
  margin-top: 0;
  color: #fff;
`;

const FeaturedMovie = props => {
  return (
    <Container backdropPath={props.movie.backdrop_path}>
      <InnerContainer>
        <PosterContainer>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            alt="movie poster"
          />
        </PosterContainer>
        <TextBox>
          <MovieHeading>{props.movie.original_title}</MovieHeading>
          <p>{props.movie.overview}</p>
        </TextBox>
      </InnerContainer>
    </Container>
  );
};

export default FeaturedMovie;
