import React from "react";
import styled from "styled-components";
import AddCartButton from "../../AddCartButton";
import Rating from "./Rating";
import usdCurrency from "../../utils/usdCurrency";

const Details = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: min-content;
  padding: 1rem 0;
  padding-right:1rem;
  text-align:left;
  position:sticky;
  top: 4rem;
  display:flex;
  flex-direction:column;
  gap:1rem;

  & h3{
    font-size: 2rem;
    letter-spacing: 1px;
    font-style:italic;
  }

  & .top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: grey;
  }

  & .price{
    font-weight: 900;
    font-size: .8rem;
    letter-spacing: 2px;
  }

  & .description{
    font-size:.8rem;
    line-height: 1rem;
    color: grey;
    letter-spacing:.4px;
  }
`;

const ProductDetails = (props) => {
  const { id, title, description, price, rating, category } = props.product;
  return <Details>
    <div className='top'>
    <div>{category}</div>
    <Rating rating={rating}/>
    </div>
    
    <h3>{title}</h3>
    <p className='price'>{usdCurrency(price)}</p>

    <p className="description">{description}</p>

    <AddCartButton id={id}/>
    </Details>;
};

export default ProductDetails;
