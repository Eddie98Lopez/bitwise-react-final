import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const BadgeWrap= styled.div`
width: 20px;
height:20px;
position:relative;


& .badge{
    
    position:absolute;
   
    display:grid;
    display:${props=> props.length==0 ? "none" : 'grid'};
    place-content:center;
    z-index: 5;
    width: 15px;
    height: 15px;
    top:-8px;
    right:-8px;
    font-weight: 600;
    border-radius: 50px;
    font-size: .7rem;
    background:${props=>props.background};
    color: ${props=>props.color};
}

& svg{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    width: inherit;
    z-index:-3;
    height:auto;
}`

const CountBadge = ({children,length,path,...props}) => {
  const navigate = useNavigate()

  return (
    
    <BadgeWrap {...props} length={length} onClick={()=>navigate(path)}>
        <div className='badge'>{length}</div>
        {children}
    </BadgeWrap>
    
  )
}

export default CountBadge