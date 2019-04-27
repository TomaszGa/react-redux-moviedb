import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getExploreMovies } from "../actions/exploreActions";

const Container = styled.div``;

class ExploreMovies extends Component {
  state = {};

  componentDidMount() {
    this.props.getExploreMovies(
      this.props.match.params.topic,
      this.props.match.params.query
    );
  }

  render() {
    return (
      <Container>
        <h1>Explore</h1>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    exploreMovieResults: state.explore.exploreMovieResults
  };
};

const mapDispatchToProps = {
  getExploreMovies: getExploreMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreMovies);
