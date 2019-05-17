import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

import SearchBox from "../containers/SearchBox";

const Container = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  padding: 20px 0px;
`;

const InnerContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const LogoLink = styled(Link)`
  //text-decoration: none;
`;

const Logo = styled.img`
  margin: 0;
  width: 180px;
  //text-decoration: none;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <LogoLink to="/">
          <Logo src={logo} alt="Powered by moviedb " />
        </LogoLink>
        <SearchBox />
      </InnerContainer>
    </Container>
  );
};

export default Header;
