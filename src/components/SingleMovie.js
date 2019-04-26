import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getSingleMovie } from "../actions/singleMovieActions";

const Container = styled.div`
  padding: 30px 15px;
  background: #000;
  ${({ backdropPath }) =>
    backdropPath &&
    `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(https://image.tmdb.org/t/p/original/${backdropPath}););`}

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
  min-height: 540px;
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

class singleMovie extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getSingleMovie(this.props.match.params.movieId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.getSingleMovie(this.props.match.params.movieId);
    }
  }

  render() {
    const { singleMovieData } = this.props;

    if (!singleMovieData) {
      return null;
    }

    return (
      <Container backdropPath={singleMovieData.backdrop_path}>
        <InnerContainer>
          <PosterContainer>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${
                singleMovieData.poster_path
              }`}
              alt="movie poster"
            />
          </PosterContainer>
          <TextBox>
            <MovieHeading>
              {this.props.singleMovieData.original_title}
            </MovieHeading>
            <p>{this.props.singleMovieData.overview}</p>
          </TextBox>
        </InnerContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    singleMovieData: state.singleMovie.singleMovieData
  };
};

const mapDispatchToProps = {
  getSingleMovie: getSingleMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleMovie);
