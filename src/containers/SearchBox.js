import React, { Component } from "react";
import styled from "styled-components";

const InputBox = styled.input`
  border-radius: 50px;
  border: 1px solid lightgrey;
`;

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div>
        <InputBox />
      </div>
    );
  }
}

export default SearchBox;
