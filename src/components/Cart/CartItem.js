import React from 'react'
import styled from 'styled-components'
import usdCurrency from '../../utils/usdCurrency'
import ImageContainer from '../styledComponents/ImageContainer'
import { useStore } from '../../store/StoreProvider'
import remFromCart from '../../utils/remFromCart'
import CloseButton from '../../assets/closeButton'


const ItemWrapper = styled.li`
padding:2rem;
box-sizing:border-box;
width:100%;
height: min-content;
display:grid;
gap:1rem;
border-bottom: 1px solid grey;
grid-template-columns: 1fr 4fr;
text-align:left;
position:relative;

& .close{
  position:absolute;
  top:1rem; 
  right:1rem;

}

& h2{
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight:600;
}
& p{
  margin-bottom: .5rem;
  line-height: .9rem;
  width: 15rem;
  color: grey;
  font-size:.7rem;
}`

const CartItem = ({product, quantity, ...props}) => {
    const {dispatch} = useStore()
    const {id, title, description, price, image} = product
    const close = (e) => {
      remFromCart(dispatch,id)
    }
  return (
    <ItemWrapper>
        <ImageContainer>
          <img src={image} alt={title}/>
        </ImageContainer>
        <div>
            <h2>{usdCurrency(price)}</h2>
            <p>{title}</p>
            <div>Qty. {quantity} </div>
        </div>
        <CloseButton className='close' 
        width='15px'
        height='15px'
        color='lightgrey'
        onClick={close}/>


    </ItemWrapper>
  )
}

export default CartItem