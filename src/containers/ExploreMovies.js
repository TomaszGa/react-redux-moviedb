import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getExploreMovies } from "../actions/exploreActions";
import FullScreenLoader from "../components/FullScreenLoader";

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
    console.log(this.props);
    if (!this.props.exploreMovieData) {
      return <FullScreenLoader />;
    }

    return (
      <Container>
        <div>
          {this.props.match.params.topic}: {this.props.match.params.query}
        </div>
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
    exploreMovieData: state.explore.exploreMovieData
  };
};

const mapDispatchToProps = {
  getExploreMovies: getExploreMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreMovies);
