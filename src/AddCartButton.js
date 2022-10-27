import React, {useEffect, useState} from 'react'
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
padding:1rem;
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  position: relative;
  transition: color 0.3s;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: green;
  transition: ${props=>props.click ?'none' :'transform 1.5s ease-out;'};
  transform: ${props=>props.clicked ? 'scaleX(1)' :"scaleX(0)"};
  transform-origin: 0 50%;
 
}
&:hover {
  color: white;
}
`



const AddCartButton = (props) => {
    const {id} = props
    const {store, dispatch} = useStore()
    const [clicked,setClicked] = useState(false)
    const [message,setMessage] = useState('Add to Bag')

    const product = store.products.filter(item => item.id === id)[0]
    const click = (e)=>{
      setClicked(true)
      setTimeout(()=>{
        addToCart(product,dispatch)
        setMessage('added')},1500)
      setTimeout(()=>{setClicked(false)},3000)
      setTimeout(()=>{setMessage('add again')},3000)

    }

   

  return (
    <CartButton onClick={click} clicked={clicked}>
      {message}
    </CartButton>
  )
}

export default AddCartButton