import React, { useState } from "react";
import HeartIcon from "../../assets/heartIcon";
import styled from "styled-components";
import { useStore } from "../../store/StoreProvider";
import addToFav from "../../utils/addToFavorites";

const Wrapper = styled.div`
  height: 18px;
  width: 18px;

  & svg {
    width: inherit;
    height: auto;
    stroke: black;

    ${(props) =>
      props.fill === "true"
        ? `
            fill: black;
            opacity: 1;
    `   :` 
            fill:none;
            opacity: .3;
    `}
  }
 @media only screen and (max-width:425px){
    height: 30px;
    width: 30px;

 }
`;

const FavButton = (props) => {
  const { dispatch } = useStore();
  const { favorite } = props.product;

  const click = (e) => {
    e.stopPropagation();
    addToFav(props.product, dispatch);
  };

  return (
    <Wrapper {...props} onClick={click} fill={favorite.toString()}>
      <HeartIcon />
    </Wrapper>
  );
};

export default FavButton;
