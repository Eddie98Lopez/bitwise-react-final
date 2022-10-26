import React from 'react'
import { useCheckoutForm } from './context/FormProvider'
import { Label,Input } from '../styledComponents/Forms'
import styled from 'styled-components'

const AddressWrapper = styled.div`
display:grid;
gap:1rem;
grid-template-areas: 
'first first first last last last'
'address address address address address address'
'city city state state zip zip';

& :nth-child(1){
grid-area:first;
}
& :nth-child(2){
  grid-area:last;
}
& :nth-child(3){
  grid-area:address;
}
& :nth-child(4){
  grid-area:city;
}
& :nth-child(5){
  grid-area:state;
}
& :nth-child(6){
  grid-area:zip;
}

@media only screen and (max-width:768px){
  grid-template-areas:
  "first first first"
  "last last last"
  "address address address"
  "city city city"
  "state state zip";
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
<div className='name'>
      <Label>First</Label>
      <Input
        type="text"
        name="first"
        onChange={change}
        placeholder="John"
        value={first}
      />
   
    </div>
    <div className='name'>
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