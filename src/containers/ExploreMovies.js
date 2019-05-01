import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getExploreMovies } from "../actions/exploreActions";
import FullScreenLoader from "../components/FullScreenLoader";
import ExploreGenreHeader from "../components/ExploreGenreHeader";
import ExploreActorHeader from "../components/ExploreActorHeader";

const Container = styled.div`
  background: #222;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 200px;
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
        console.log("am here");
        exploreResultsHeader = (
          <ExploreActorHeader actorInfo={this.props.actorInfo} />
        );
        break;
      default:
    }

    return (
      <Container>
        {exploreResultsHeader}
        {this.props.exploreMovieData.results.map(result => {
          return (
            <Link to={`/s/${result.id}`}>
              <h2>{result.title}</h2>
            </Link>
          );
        })}
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
  getExploreMovies: getExploreMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreMovies);
