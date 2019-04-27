import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getSingleMovie,
  singlePosterLoaded
} from "../actions/singleMovieActions";
import FullScreenLoader from "./FullScreenLoader";

const Container = styled.div`
  padding: 30px 15px;
  background: #222;
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
  width: 100%;
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
    this.findMovieId();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.findMovieId();
    }
  }

  findMovieId() {
    if (this.props.match.path === "/") {
      this.props.getSingleMovie("299534");
    } else {
      this.props.getSingleMovie(this.props.match.params.movieId);
    }
  }

  render() {
    const { singleMovieData, singlePosterLoaded } = this.props;

    //if API request returned data
    if (singleMovieData) {
      //preload poster image
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/w500/${
        singleMovieData.poster_path
      }`;

      //preload backdrop image
      const backdrop = new Image();
      backdrop.src = `https://image.tmdb.org/t/p/original/${
        singleMovieData.backdrop_path
      }`;

      //if poster image loaded, dispatch action, this will display the single movie
      img.onload = this.props.onSinglePosterLoaded;
    }

    //show spinner if data or poster not loaded yet
    if (!singleMovieData || !singlePosterLoaded) {
      return <FullScreenLoader />;
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
    singleMovieData: state.singleMovie.singleMovieData,
    singlePosterLoaded: state.singleMovie.singlePosterLoaded
  };
};

const mapDispatchToProps = {
  getSingleMovie: getSingleMovie,
  onSinglePosterLoaded: singlePosterLoaded
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleMovie);
