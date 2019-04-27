import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  getSearchResults,
  showResultsList,
  hideResultsList
} from "../actions/searchActions";

const InputBox = styled.input`
  background: transparent;
  width: 300px;
  border: 0;
  border-bottom: 1px solid lightgrey;
  padding: 10px 15px;
  font-family: inherit;
  color: #fff;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchResults = styled.div`
width: 100%;
  display: ${props => (props.shouldDisplay ? "block" : "none")}
  position: absolute;
  top: 100%;
  padding: 10px;
  background: rgba(0,0,0,0.7);
`;

const StyledLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 6px;
`;

class SearchBox extends Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    if (event.target.value.length > 2) {
      this.props.getSearchResults(event.target.value);
    } else {
      this.props.hideResultsList();
    }
  };

  handleBlur = event => {
    if (!event.relatedTarget) {
      this.props.hideResultsList();
    }
  };

  handleFocus = event => {
    if (this.state.inputValue.length > 2) {
      this.props.showResultsList();
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.getSearchResults(this.state.inputValue);
  };

  render() {
    console.log(this.props.searchResults);
    let linkList = null;
    if (
      this.props.searchResults &&
      this.props.searchResults.total_results > 0
    ) {
      linkList = this.props.searchResults.results.slice(0, 7).map(result => (
        <StyledLink
          className="dropdown-link"
          key={result.id}
          to={`/s/${result.id}`}
          onClick={this.props.hideResultsList}
        >
          {result.title}
        </StyledLink>
      ));
    }
    return (
      <form onSubmit={this.handleFormSubmit}>
        <SearchContainer onBlur={this.handleBlur} onFocus={this.handleFocus}>
          <InputBox
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <SearchResults
            shouldDisplay={
              this.props.showSearchResultsList &&
              this.props.searchResults.results.length > 0
            }
          >
            {linkList ? linkList : null}
          </SearchResults>
        </SearchContainer>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    searchResults: state.search.searchResults,
    showSearchResultsList: state.search.showSearchResultsList
  };
};

const mapDispatchToProps = {
  getSearchResults: getSearchResults,
  showResultsList: showResultsList,
  hideResultsList: hideResultsList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
