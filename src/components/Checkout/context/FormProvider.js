import React, {createContext, useContext, useState} from 'react'
import initialCheckout from './initialForm'

const CheckoutFormContext = createContext()
export const useCheckoutForm = ()=> useContext(CheckoutFormContext)
//const useForm = ()=> useCheckoutForm().form
//const useErrors = ()=> useCheckoutForm().errors


const FormProvider = ({children,...props}) => {
    const [form,setForm] = useState(initialCheckout)
    //const [errs,setErrs] = useState(initialCheckout)

    const dispatch = (name,value) => {
      setForm({...form,[name]:value})
    }
    
  return (
    <CheckoutFormContext.Provider value={{form,dispatch}}>
        {children}
    </CheckoutFormContext.Provider>
  )
}

export default FormProvider