import React from "react";
import ImageContainer from "./styledComponents/ImageContainer";
import styled from 'styled-components'

const Image = styled(ImageContainer)`

& img{
    filter: grayscale(1);
    opacity: .3;
    transition:all ease-in-out .3s;
    margin:auto;
}

& .price{
    text-align:center;
    position:absolute;
    min-width: 4rem;
    padding:.15rem;
    background: black;
    color:white;
    z-index:2;
    bottom: 0;
    left: .35rem;
    transition: all ease-in-out .3s;

}

&:hover{

    & img{
        filter: grayscale(0);
        opacity: 1;
        transform-origin: center;
        transform: scale(110%,110%);
    }
    & .price{
       padding-bottom:1.5rem;
    }
}
` 

const ProductImage = (props) => {
  const { width, height, objectFit, src, alt } = props;
  //console.log(src)
  return (
    <Image width={width} height={height} objectFit={objectFit}>
      <img src={src} alt={alt}/>
      {props.children}
    </Image>
  );
};

export default ProductImage;
