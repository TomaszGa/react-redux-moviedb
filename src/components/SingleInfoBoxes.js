import React from "react";
import styled from "styled-components";

import MovieInformationBox from "./MovieInformationBox";

const InfoBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SingleInfoBoxes = props => {
  return (
    <InfoBoxes>
      <MovieInformationBox
        heading={"Vote Average:"}
        data={`${props.data.vote_average}/10`}
      />
      <MovieInformationBox
        heading={"Release Date:"}
        data={`${props.data.release_date}`}
      />
    </InfoBoxes>
  );
};

export default SingleInfoBoxes;
