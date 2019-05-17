import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.li`
  background: #444;
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const PosterContainer = styled.div`
  width: 15%;
`;

const Poster = styled.img`
  max-width: 100%;
`;

const DetailsContainer = styled.div`
  width: 85%;
  padding: 15px;
`;

const DetailsTitle = styled.h2``;

const ExploreResultCard = props => {
  console.log(props.data);
  const { data } = props;
  return (
    <Container>
      <Link to={`/s/${data.id}`}>
        <InnerContainer>
          <PosterContainer>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            />
          </PosterContainer>
          <DetailsContainer>
            <DetailsTitle>{data.original_title}</DetailsTitle>
          </DetailsContainer>
        </InnerContainer>
      </Link>
    </Container>
  );
};

export default ExploreResultCard;
