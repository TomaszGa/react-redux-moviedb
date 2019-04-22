import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getSearchResults } from "../actions/searchActions";

const InputBox = styled.input`
  border-radius: 25px;
  border: 1px solid lightgrey;
`;

class SearchBox extends Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    if (event.target.value.length > 2) {
      this.props.getSearchResults(event.target.value);
    }
  };

  render() {
    let linkList = null;
    if (
      this.props.searchResults &&
      this.props.searchResults.total_results > 0
    ) {
      linkList = this.props.searchResults.results.map(result => (
        <Link key={result.id} to={`/s/${result.id}`}>
          {result.title}
        </Link>
      ));
    }
    return (
      <form>
        <div>
          <InputBox
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          {linkList ? linkList : null}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    searchResults: state.search.searchResults
  };
};

const mapDispatchToProps = {
  getSearchResults: getSearchResults
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
