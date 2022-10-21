import React from 'react'
import { useStore } from '../../store/StoreProvider'
import CartItem from './CartItem'
import styled from 'styled-components'

const ListWrap = styled.div`
margin-top: 2rem;
padding: 0 1rem;
box-sizing:border-box;
width:100%;
margin:auto;
background: white;`

const CartList = () => {
  const {cart} = useStore().store
  const items = [...new Set(cart)]
  const counts = {}
  const countstuff = cart.forEach( x=>  counts[x.id] = (counts[x.id] || 0) + 1)


  return (
    <ListWrap>
      {items.map(product => <CartItem product={product} quantity={counts[product.id]}/>)}
    </ListWrap>
  )
}

export default CartList