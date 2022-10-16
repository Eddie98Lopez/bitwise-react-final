import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
background: black;
padding: .25rem 0;
color:white;
text-align:center;
display: flex;
justify-content:center;
align-items:center;
text-transform: uppercase;
letter-spacing: 2px;
font-size: .85rem;
font-weight: 600;

& span{
    font-style:italic;
    margin: 0 .75rem;
}

`

const CallToAction = (props) => {

  return (
    <Wrapper>
        Use promo code: <span>Savenow</span> for 15% off at checkout
    </Wrapper>
  )
}

export default CallToAction