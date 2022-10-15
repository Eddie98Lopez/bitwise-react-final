import React from 'react'
import ImageContainer from './styledComponents/ImageContainer'

const Image = (props) => {
  return (
    <ImageContainer>
        <image src ={props.src} alt={props.alt}/>
    </ImageContainer>
  )
}

export default Image