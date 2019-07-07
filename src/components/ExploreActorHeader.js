import React from "react";

import styled from "styled-components";

const ActorHeading = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;
`;

const ExploreActorHeader = props => {
  console.log(props.actorInfo);

  let output = <ActorHeading>Loading...</ActorHeading>;

  if (props.actorInfo) {
    output = <ActorHeading>{props.actorInfo.name}</ActorHeading>;
  }
  return output;
};

export default ExploreActorHeader;
