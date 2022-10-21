import React from 'react'

import styled from 'styled-components'
import CartList from '../components/Cart/CartList'
import Total from '../components/Cart/Total'

const CartWrap = styled.section`
width: 100%;
box-sizing:border-box;
padding:2rem;
display:grid;
grid-template-columns: 2fr 1fr;
gap:2rem;
`

const CartPage = (props) => {

 


  return (
    <CartWrap>

      <CartList/>
      <Total/>
    </CartWrap>
  )
}

export default CartPage