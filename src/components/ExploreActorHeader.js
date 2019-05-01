import React from "react";

const ExploreActorHeader = props => {
  console.log(props);
  if (props.actorInfo) {
    return <div>{<h1>{props.actorInfo.name}</h1>}</div>;
  }
  return null;
};

export default ExploreActorHeader;
