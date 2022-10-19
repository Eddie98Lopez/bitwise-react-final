import React from 'react'
import styled from 'styled-components'
import StarIcon from '../../assets/starIcon'

const RatingWrap = styled.div`
display:flex;
align-items:center;
gap: .5rem;
color:black

& span{
    display:block;
    font-size:1.15rem;
    font-weight:600;
}
& svg{
    height: 1.5rem;
    width:auto;
    

}

`


const Rating = (props) => {
    const {rating} = props
  return (
    <RatingWrap>
        <span>{rating.rate}</span>
        <StarIcon/>
    </RatingWrap>
  )
}

export default Rating