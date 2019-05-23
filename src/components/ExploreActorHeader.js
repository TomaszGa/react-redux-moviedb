import React from "react";

import styled from "styled-components";

const ActorHeading = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;
`;

const ExploreActorHeader = props => {
  console.log(props);
  if (props.actorInfo) {
    return <div>{<ActorHeading>{props.actorInfo.name}</ActorHeading>}</div>;
  }
  return null;
};

export default ExploreActorHeader;
