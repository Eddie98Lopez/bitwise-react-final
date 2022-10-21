import React from 'react'
import { useStore } from '../../store/StoreProvider'
import CartItem from './CartItem'
import styled from 'styled-components'
import { calcTotal } from './Total'

const Wrapper = styled.div`
width: 100%;
box-sizing:border-box;
background:white;

text-align:left;

& .title{
  padding:2rem 0 0 2rem;
  font-weight: 600;
text-transform: uppercase;
letter-spacing:2px;
}
& .subtotal{
  text-align:right;
  padding:2rem;
  font-weight: 600;
text-transform: uppercase;
letter-spacing:2px;


}`

const ListWrap = styled.div`
padding: 0 1rem;
box-sizing:border-box;
width:100%;
height:min-height;
background: white;`

const CartList = () => {
  const {cart} = useStore().store
  const items = [...new Set(cart)]
  const counts = {}
  const countstuff = cart.forEach( x=>  counts[x.id] = (counts[x.id] || 0) + 1)


  return (
<Wrapper>
  <h3 className='title'>My Bag
  </h3>
<ListWrap>
      
      {items.map(product => <CartItem product={product} quantity={counts[product.id]}/>)}
   
    </ListWrap>
    <p className='subtotal'>Subtotal: {calcTotal(cart)}</p>
</Wrapper>
  )
}

export default CartList