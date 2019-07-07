import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  padding: 8px 13px;
  border-radius: 3px;
  background: #01d277;
  margin: 0 10px 7px 0;
  color: #fff;
  font-size: 15px;
`;

const NavList = props => {
  return (
    <Container>
      {props.data.map(item => {
        return (
          <StyledLink to={`${props.baseUrl}${item.id}`} key={item.name}>
            {item.name}
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default NavList;
