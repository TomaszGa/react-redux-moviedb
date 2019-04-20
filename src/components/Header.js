import React from "react";
import styled from "styled-components";

import SearchBox from "../containers/SearchBox";

const Container = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  padding: 10px 0px;
`;

const InnerContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo>MovieDB Explorer</Logo>
        <SearchBox />
      </InnerContainer>
    </Container>
  );
};

export default Header;
