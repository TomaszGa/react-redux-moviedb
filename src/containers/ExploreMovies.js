import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";

import {
  getExploreMovies,
  getInfiniteScrollMovies
} from "../actions/exploreActions";
import FullScreenLoader from "../components/FullScreenLoader";
import ExploreGenreHeader from "../components/ExploreGenreHeader";
import ExploreActorHeader from "../components/ExploreActorHeader";
import ExploreResultCard from "../components/ExploreResultCard";

import debounce from "lodash.debounce";

const Container = styled.div`
  background: #222;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 200px;
  padding-bottom: 50px;
`;

const ExploreResultsPlaceholder = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;
`;

const ExploreResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  width: 100%;
`;

class ExploreMovies extends Component {
  componentDidMount() {
    this.props.getExploreMovies(
      this.props.match.params.topic,
      this.props.match.params.query
    );
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      this.props.getInfiniteScrollMovies();
    }
  }, 100);

  render() {
    if (!this.props.exploreMovieData) {
      return <FullScreenLoader />;
    }

    let exploreResultsHeader = (
      <ExploreResultsPlaceholder>Loading...</ExploreResultsPlaceholder>
    );
    // console.log(exploreResultsHeader);
    switch (this.props.match.params.topic) {
      case "genre":
        exploreResultsHeader = (
          <ExploreGenreHeader genre={this.props.match.params.query} />
        );
        break;
      case "actor":
        exploreResultsHeader = (
          <ExploreActorHeader actorInfo={this.props.actorInfo} />
        );
        break;
      default:
    }
    return (
      <Container>
        {exploreResultsHeader}
        <ExploreResultsList>
          {this.props.exploreMovieData.results.map(result => {
            return <ExploreResultCard data={result} key={result.id} />;
          })}
        </ExploreResultsList>
        {this.props.infiniteScrollLoading ? (
          <BeatLoader color={"#01d277"} loading={true} />
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    exploreMovieData: state.explore.exploreMovieData,
    actorInfo: state.explore.actorInfo,
    infiniteScrollLoading: state.explore.infiniteScrollLoading
  };
};

const mapDispatchToProps = {
  getExploreMovies: getExploreMovies,
  getInfiniteScrollMovies: getInfiniteScrollMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreMovies);
