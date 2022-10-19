import React from 'react'
import styled from 'styled-components'
import ProductImage from '../ProductThumb/ProductImage'
import usdCurrency from '../../utils/usdCurrency'


const ItemWrapper = styled.li`
width:100%;
height: 20rem;
background: blue;
display:grid;
gap:1rem;
grid-template-columns: 1fr 2fr;`

const CartItem = ({product, ...props}) => {
    const {id, title, description, price, image} = product
  return (
    <ItemWrapper>
        <ProductImage src={image} alt={title}/>
        <div>
            <h2>{title}</h2>
            <p>{usdCurrency(price)}</p>
        </div>
    </ItemWrapper>
  )
}

export default CartItem