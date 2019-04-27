import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
`;

const Heading = styled.h3`
  margin-bottom: 0;
`;

const Data = styled.span`
  font-size: 26px;
`;

const MovieInformationBox = props => {
  return (
    <Container>
      <Heading>{props.heading}</Heading>
      <Data>{props.data}</Data>
    </Container>
  );
};

export default MovieInformationBox;
