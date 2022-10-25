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
`

const ProductPage = (props) => {
  const {id} = useParams()
  const {loading} = useStore().store
  const {dispatch} = useStore()
  //console.log(id)
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res=>{
        setProduct(res.data)
        dispatch({type:"END_LOAD"})
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