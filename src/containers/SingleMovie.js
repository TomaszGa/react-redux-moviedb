import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import notFound from "../poster-not-found.png";
import MovieInformationBox from "../components/MovieInformationBox";
import NavList from "../components/NavList";

import {
  getSingleMovie,
  singlePosterLoaded
} from "../actions/singleMovieActions";
import FullScreenLoader from "../components/FullScreenLoader";

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
  min-height: 500px;
`;

const Poster = styled.img`
  max-width: 100%;

  margin-bottom: 0;
  display: block;
`;

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

const InfoBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    const {
      singleMovieData,
      singlePosterLoaded,
      singleMovieError,
      singleMovieCast
    } = this.props;

    if (singleMovieError) {
      return <Redirect to="/" />;
    }
    let posterSrc = null;
    //if API request returned data
    if (singleMovieData && singleMovieData.poster_path) {
      posterSrc = `https://image.tmdb.org/t/p/w500/${
        singleMovieData.poster_path
      }`;

      //preload poster image
      const poster = new Image();
      poster.src = posterSrc;

      //preload backdrop image
      const backdrop = new Image();
      backdrop.src = `https://image.tmdb.org/t/p/original/${
        singleMovieData.backdrop_path
      }`;

      //if poster image loaded, dispatch action, this will display the single movie
      poster.onload = this.props.onSinglePosterLoaded;
    } else {
      posterSrc = notFound;
      this.props.onSinglePosterLoaded();
    }

    //show spinner if data or poster not loaded yet
    if (!singleMovieData || !singlePosterLoaded) {
      return <FullScreenLoader />;
    }

    let castData = null;

    if (singleMovieCast) {
      castData = singleMovieCast.cast.splice(0, 5).map(person => {
        return { id: person.id, name: person.name };
      });
    }

    return (
      <>
        <Helmet>
          <title>{`TMDB Browser - ${singleMovieData.original_title}`}</title>
        </Helmet>
        <Container backdropPath={singleMovieData.backdrop_path}>
          <InnerContainer>
            <PosterContainer>
              <Poster src={posterSrc} alt="movie poster" />
            </PosterContainer>
            <TextBox>
              <MovieHeading>{singleMovieData.original_title}</MovieHeading>
              <MovieSubheading>{singleMovieData.tagline}</MovieSubheading>
              <p>{singleMovieData.overview}</p>
              <NavList
                data={singleMovieData.genres}
                baseUrl={"/explore/genre/"}
              />
              <InfoBoxes>
                <MovieInformationBox
                  heading={"Vote Average:"}
                  data={`${singleMovieData.vote_average}/10`}
                />
                <MovieInformationBox
                  heading={"Release Date:"}
                  data={`${singleMovieData.release_date}`}
                />
              </InfoBoxes>
              {castData ? (
                <NavList data={castData} baseUrl={"/explore/actor/"} />
              ) : null}
            </TextBox>
          </InnerContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    singleMovieData: state.singleMovie.singleMovieData,
    singlePosterLoaded: state.singleMovie.singlePosterLoaded,
    singleMovieError: state.singleMovie.singleMovieError,
    singleMovieCast: state.singleMovie.singleMovieCast
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
