import React from "react";
import styled from "styled-components";
import ProductImage from "./ProductImage";
import FavButton from "./FavButton";
//import addToFav from "../../utils/addToFavorites";
import { useStore } from "../../store/StoreProvider";
import { useNavigate } from "react-router-dom";
import usdCurrency from "../../utils/usdCurrency";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 1rem;
  transition: all .3s ease-in-out;
  border: 1px solid rgba(0,0,0,0);

  & h3 {
    margin-top: 1rem;

    text-align: left;
    font-weight: 600;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    text-overflow: ellipsis;
    background: none;
    font-size: .7rem;
    margin-bottom: 0.25rem;
    padding: 0 .25rem;
  }

  & p {
    font-size: 0.7rem;
    color: grey;
    text-align: left;
    margin-top: 0.5rem;
    padding: 0 .25rem;
  }

  & .fav {
    position: absolute;
    top: 0.35rem;
    right: 0.35rem;
  }

  &:hover{
    border: 1px solid rgba(0,0,0,1);
  }

`;

const ProductThumb = (props) => {
  const { image, title, category, price, id } = props.product;
  const { store, dispatch } = useStore();
  const navigate = useNavigate();

  const push = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    navigate(`/product/${id}`)
  }
  return (
    <Wrapper onClick={push}>
      <ProductImage src={image} alt={title}>
        <span className="price">{usdCurrency(price)}</span>
        <FavButton className="fav" product={props.product}/>
      </ProductImage>
      <h3>{title}</h3>
      <p>{category}</p>
    </Wrapper>
  );
};

export default ProductThumb;
