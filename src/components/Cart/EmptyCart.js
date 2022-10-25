import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
height: 70vh;
display:grid;
place-content:center;
text-align:center;
background:white;`

const EmptyCart = () => {
  return (
    <Wrapper>Looks like your bag is empty.</Wrapper>
  )
}

export default EmptyCart