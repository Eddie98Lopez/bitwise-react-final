import React from 'react'
import styled from 'styled-components'
import ProductImage from '../ProductThumb/ProductImage'
import usdCurrency from '../../utils/usdCurrency'
import ImageContainer from '../styledComponents/ImageContainer'


const ItemWrapper = styled.li`
padding:2rem;
box-sizing:border-box;
width:100%;
height: min-content;
display:grid;
gap:1rem;
border-bottom: 1px solid grey;
grid-template-columns: 1fr 4fr;
text-align:left;

& h2{
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight:600;
}
& p{
  margin-bottom: .5rem;
  line-height: .9rem;
  width: 15rem;
  color: grey;
  font-size:.7rem;
}`

const CartItem = ({product, quantity, ...props}) => {
    const {id, title, description, price, image} = product
  return (
    <ItemWrapper>
        <ImageContainer>
          <img src={image} alt={title}/>
        </ImageContainer>
        <div>
            <h2>{usdCurrency(price)}</h2>
            <p>{title}</p>
            <div>Qty. {quantity}</div>
        </div>


    </ItemWrapper>
  )
}

export default CartItem