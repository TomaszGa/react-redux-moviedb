import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getSearchResults } from "../actions/searchActions";

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
  background: rgba(0,0,0,0.2);
`;

const StyledLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 6px;
`;

class SearchBox extends Component {
  state = {
    inputValue: "",
    resultsVisible: false
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    if (event.target.value.length > 2) {
      this.setState({ resultsVisible: true });
      this.props.getSearchResults(event.target.value);
    } else {
      this.setState({ resultsVisible: false });
    }
  };

  handleBlur = event => {
    console.log(event.relatedTarget);
    if (
      event.relatedTarget &&
      !event.relatedTarget.className.toLowerCase().includes("dropdown-link")
    ) {
      this.setState({ resultsVisible: false });
    }
  };

  render() {
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
        >
          {result.title}
        </StyledLink>
      ));
    }
    return (
      <form>
        <SearchContainer onBlur={this.handleBlur}>
          <InputBox
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <SearchResults shouldDisplay={this.state.resultsVisible}>
            {linkList ? linkList : null}
          </SearchResults>
        </SearchContainer>
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
