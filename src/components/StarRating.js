import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Container = styled.div`
  text-align: right;
  width: 40%;
  margin-top: 5px;
`;

const StarRating = props => {
  const starsOutput = [];
  const rating = props.rating - 1;
  for (let i = 0; i < 5; i = i + 1) {
    if (i < rating) {
      starsOutput.push(<FaStar />);
    } else if (i - 1 < rating) {
      starsOutput.push(<FaStarHalfAlt />);
    } else {
      starsOutput.push(<FaRegStar />);
    }
  }

  return <Container>{starsOutput}</Container>;
};

export default StarRating;
