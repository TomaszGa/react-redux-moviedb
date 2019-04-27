import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenLoader = () => {
  return (
    <Container>
      <BeatLoader color={"#01d277"} loading={true} />
    </Container>
  );
};

export default FullScreenLoader;
