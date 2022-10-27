import React from 'react'
import Button from './styledComponents/Button'
import styled from 'styled-components'
import { useStore } from '../store/StoreProvider'
import { emptyCart } from '../utils/remFromCart'
import { useNavigate } from 'react-router-dom'
import { useCheckoutForm } from './Checkout/context/FormProvider'

const PayButton = styled(Button)`
background:green;
width:100%;
box-sizing:border-box;
margin:2rem auto;
font-size:1.1rem;
`

const PayNowButton = () => {
    const {dispatch} = useStore()
    const navigate = useNavigate()
    const {form} = useCheckoutForm()

    const click = (e) => {
        console.log(form)
        emptyCart(dispatch)
        navigate('/')
    }
  return (
    <PayButton onClick={click}>Pay Now</PayButton>
  )
}

export default PayNowButton