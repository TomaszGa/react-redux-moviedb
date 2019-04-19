import React from "react";
import styled from "styled-components";

import SearchBox from "../containers/SearchBox";

const Container = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <SearchBox />
    </Container>
  );
};

export default Header;
