import React from 'react'
import FormProvider from '../components/Checkout/context/FormProvider'
import CheckoutForm from '../components/Checkout/CheckoutForm'
const CheckoutPage = () => {
  return (

    <FormProvider>
    <div>
      <CheckoutForm/>
    </div>
    </FormProvider>
  )
}

export default CheckoutPage