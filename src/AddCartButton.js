import React from 'react'
import styled from 'styled-components'
import Button from './components/styledComponents/Button'
import { useStore } from './store/StoreProvider'
import addToCart from './utils/addToCart'

const CartButton = styled(Button)`
text-transform: uppercase;
letter-spacing: 2px;
font-weight: 600;
font-size: .7rem;
margin-top: 2rem;
cursor:pointer;
`



const AddCartButton = (props) => {
    const {id} = props
    const {store, dispatch} = useStore()

    const product = store.products.filter(item => item.id === id)[0]

   

  return (
    <CartButton onClick={()=>addToCart(product,dispatch)}>Add to Bag</CartButton>
  )
}

export default AddCartButton