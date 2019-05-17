import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.li`
  background: #444;
  width: 100%;
`;

const ExploreResultCard = props => {
  console.log(props.data);
  const { data } = props;
  return (
    <Container>
      <Link to={`/s/${data.id}`}>
        <h2>{data.original_title}</h2>
      </Link>
    </Container>
  );
};

export default ExploreResultCard;
