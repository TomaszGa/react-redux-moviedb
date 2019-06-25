import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getExploreMovies,
  clearExploreMovies
} from "../actions/exploreActions";
import FullScreenLoader from "../components/FullScreenLoader";
import ExploreGenreHeader from "../components/ExploreGenreHeader";
import ExploreActorHeader from "../components/ExploreActorHeader";
import ExploreResultCard from "../components/ExploreResultCard";

const Container = styled.div`
  background: #222;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 200px;
`;

const ExploreResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  width: 100%;
`;

class ExploreMovies extends Component {
  state = {};

  componentDidMount() {
    this.props.getExploreMovies(
      this.props.match.params.topic,
      this.props.match.params.query
    );
  }

  render() {
    if (!this.props.exploreMovieData) {
      return <FullScreenLoader />;
    }

    let exploreResultsHeader = null;
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
            return <ExploreResultCard data={result} />;
          })}
        </ExploreResultsList>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    exploreMovieData: state.explore.exploreMovieData,
    actorInfo: state.explore.actorInfo
  };
};

const mapDispatchToProps = {
  getExploreMovies: getExploreMovies,
  clearExploreMovies: clearExploreMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreMovies);
