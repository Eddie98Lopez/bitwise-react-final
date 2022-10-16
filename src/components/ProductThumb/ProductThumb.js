import React from "react";
import styled from "styled-components";
import ProductImage from "../Image";

const Wrapper = styled.div`
  width: 100%;
  overflow:hidden;

  & h3{
    margin-top: 1rem;

    text-align:left;
    font-weight:600;
    color:black;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    text-overflow: ellipsis;
    background: none;
    font-size: 1rem;
    margin-bottom: .25rem;
  }

  & p{
    font-size: .9rem;
    color: grey;
    text-align:left;
    margin-top: .5rem;
  }

`;

const ProductThumb = (props) => {
  const { image, title,category ,price} = props.product;

  return (
    <Wrapper>
      <ProductImage src={image} alt={title}>
        <span className='price'>${price}</span>
      </ProductImage>
      <h3>{title}</h3>
      <p>{category}</p>
    </Wrapper>
  );
};

export default ProductThumb;
