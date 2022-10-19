import React from "react";
import styled from "styled-components";
import CountBadge from "../CountBadge";
import { useStore } from "../../store/StoreProvider";
import HeartIcon from "../../assets/heartIcon";
import CartIcon from "../../assets/cartIcon";

const CounterWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CountIcons = (props) => {
  const { cart, products } = useStore().store;
  return (
    <CounterWrap>
      <CountBadge
        background="teal"
        color="white"
        path='/favorites'
        length={products.filter((item) => item.favorite === true).length}
      >
        <HeartIcon />
      </CountBadge>

      <CountBadge background="gold" color="black" length={cart.length} path='/cart'> 
        <CartIcon />
      </CountBadge>
    </CounterWrap>
  );
};

export default CountIcons;
