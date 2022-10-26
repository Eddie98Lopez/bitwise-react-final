import React from "react";
import styled from "styled-components";
import Total from "../components/Cart/Total";
import { useStore } from "../store/StoreProvider";
import FormProvider from "../components/Checkout/context/FormProvider";
import { Outlet } from "react-router-dom";

const CartWrap = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    padding: 1rem;
  }
`;

const CartPage = (props) => {
  const { length } = useStore().store.cart;

  return (
    <FormProvider>
      <CartWrap>
        <div>
          <Outlet />
        </div>

        <Total />
      </CartWrap>
    </FormProvider>
  );
};

export default CartPage;
