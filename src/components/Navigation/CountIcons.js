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
        length={products.filter((item) => item.favorite === true).length}
      >
        <HeartIcon />
      </CountBadge>

      <CountBadge background="crimson" color="white" length={cart.length}>
        <CartIcon />
      </CountBadge>
    </CounterWrap>
  );
};

export default CountIcons;
