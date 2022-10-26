import React from 'react'
import { Label,Input } from '../styledComponents/Forms'
import { useCheckoutForm } from './context/FormProvider'

const Name = () => {
    const {form,dispatch} = useCheckoutForm()
    const {first,last} = form
    const change = (e) => {
        const {name,value} = e.target
        dispatch(name,value)
    }
  return (
    <div className="double">
    <div>
      <Label>First</Label>
      <Input
        type="text"
        name="first"
        onChange={change}
        placeholder="John"
        value={first}
      />
      <div className="errors">error</div>
    </div>
    <div>
      <Label>Last</Label>
      <Input
        type="text"
        name="last"
        onChange={change}
        placeholder="Doe"
        value={last}
      />
      <div className="errors">error</div>
    </div>
  </div>
  )
}


export default Name