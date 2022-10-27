import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../store/StoreProvider'
import categories from '../../utils/categories'
import ProductList from '../ProductList'

const CategoryList = (props) => {
    const cat = useParams().category
    const boop = categories.filter(item=>item.path == cat)[0]
    //console.log(boop)
    const {products} = useStore().store


    const array = products.filter(item => item.category === boop.category)
    console.log(array)
    
  return (
    <ProductList products={array}/>
  )
}

export default CategoryList