import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ImageContainer from '../components/styledComponents/ImageContainer'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import { useStore } from '../store/StoreProvider'


const Grid = styled.section`
width: 100%;
display:grid;
grid-template-columns: 3fr 2fr;
gap:1rem;

@media only screen and (max-width:768px){
  grid-template-columns:100%;
}
`

const ProductPage = (props) => {
  const {id} = useParams()
  const {dispatch} = useStore()
  //console.log(id)
  const [loading,setLoading] = useState(true)
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res=>{
        setProduct(res.data)
        setLoading(false)
      })
      .catch(err=>console.log(err))
  },[])
  return (
   !loading && <Grid>
      <ImageContainer>
        <img src={product.image} alt={product.title}/>
      </ImageContainer>

<ProductDetails product={product}/>
    </Grid>
  )
}

export default ProductPage