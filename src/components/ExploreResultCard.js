import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
const Container = styled.li`
  background: #444;
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
`;

const InnerContainer = styled.div`
  display: flex;
  color: #fff;
`;

const PosterContainer = styled.div`
  width: 15%;
`;

const Poster = styled.img`
  max-width: 100%;
`;

const DetailsContainer = styled.div`
  width: 85%;
  padding: 0 15px;
`;

const DetailsTop = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DetailsTitle = styled.h2`
  margin: 0 10px 0 0;
  text-transform: uppercase;
  width: 60%;
`;

const DetailsDescription = styled.p`
  font-weight: 300;
`;

const ExploreResultCard = props => {
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
            <DetailsTop>
              <DetailsTitle>{data.original_title}</DetailsTitle>
              <StarRating rating={data.vote_average / 2} />
            </DetailsTop>
            <DetailsDescription>{data.overview}</DetailsDescription>
          </DetailsContainer>
        </InnerContainer>
      </Link>
    </Container>
  );
};

export default ExploreResultCard;
