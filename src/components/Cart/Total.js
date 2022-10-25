import React from 'react'
import styled from 'styled-components'
import {useStore} from '../../store/StoreProvider'
import usdCurrency from '../../utils/usdCurrency'
import Button from '../styledComponents/Button'
import {useLocation, useNavigate} from 'react-router-dom'

const Checkout = styled(Button)`
text-transform:uppercase;
letter-spacing:2px;
font-weight: 600;
position:absolute;
bottom: 1rem;
width: 90%;
left:50%;
transform: translate(-50%,0);
`


export const calcTotal = (array) => {
  let total = 0
  for (let i=0;i<array.length; i++) {
    total = total + array[i].price

  }
  return usdCurrency(total)
}


const TotalWrapper = styled.div`
box-sizing:border-box;
position:sticky;
width:100%;
height:20rem;
background:white;
top:5rem;
padding:1rem;

& h3{

  font-size: 1.25rem;
  text-align:left;
  font-weight:600;
  letter-spacing:2px;
  padding: 1rem 0;
  border-bottom: 2px solid black;
  margin-bottom:2rem;
  text-transform:uppercase;
}

& p{
  display: flex;
  justify-content:space-between;
  font-weight: 600;

  & :nth-child(1){
    color:lightgrey;
  }
}
`

const Total = (props) => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const {cart} = useStore().store
  const total = calcTotal(cart)
 
  return (
    <TotalWrapper>
    <h3>Total</h3>
    <p><span>SubTotal</span> <span>{total}</span></p>
    <Checkout onClick={()=>!location.includes('checkout') && navigate('/cart/checkout')}>GO TO CHECKOUT</Checkout>
    </TotalWrapper>
  )
}

export default Total