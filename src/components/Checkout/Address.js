import React from 'react'
import { useCheckoutForm } from './context/FormProvider'
import { Label,Input } from '../styledComponents/Forms'
import styled from 'styled-components'

const AddressWrapper = styled.div`
display:grid;
grid-template-columns: repeat(6,1fr);
gap:1rem;

& :nth-child(1){
    grid-column:1/4;
}
& :nth-child(2){
  grid-column:4/end;
}
& :nth-child(3){
  grid-column:1/end;
}
& :nth-child(4){
  grid-column:1/4;
}
& :nth-child(5){
  grid-column:4/6;
}
& :nth-child(6){
  grid-column:6/end;
}

`


const Address = ({type,...props}) => {
    const addyType = useCheckoutForm().form[type]
    const {address, city, state,zip,first,last} =addyType
    const {dispatch} = useCheckoutForm()
  
    const change = (e) => {
        const {name,value} = e.target
        dispatch(type,{...addyType, [name]:value})
    }
  return (
    
<AddressWrapper>
<div>
      <Label>First</Label>
      <Input
        type="text"
        name="first"
        onChange={change}
        placeholder="John"
        value={first}
      />
   
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
    
    </div>
<div>
    <Label>{type} Address</Label>
    <Input
      type="text"
      name="address"
      onChange={change}
      placeholder="1234 W Drive Ave"
      value={address}
    />
  </div>
  <div>
    <Label>city</Label>
    <Input
      type="text"
      name="city"
      onChange={change}
      placeholder="Mendota"
      value={city}
    />
  </div>
  <div>
    <Label>state</Label>
    <Input
      type="text"
      name="state"
      onChange={change}
      placeholder="CA"
      value={state}
    />
  </div>

  <div>
    <Label>zip</Label>
    <Input
      type="text"
      name="zip"
      onChange={change}
      placeholder="xxxxx"
      value={zip}
    />
  </div>
</AddressWrapper>

  )
}

export default Address