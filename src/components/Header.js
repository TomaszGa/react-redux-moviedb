import React from "react";
import styled from "styled-components";

import SearchBox from "../containers/SearchBox";

const Container = styled.div`
  background: #00fc87;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  max-width: 1100px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <Logo>MovieDB Explorer</Logo>
      <SearchBox />
    </Container>
  );
};

export default Header;
