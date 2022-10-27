import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../store/StoreProvider'
import categories from '../../utils/categories'
import ProductList from '../ProductList'

const CategoryList = (props) => {
    const param = useParams().category
    const category = categories.filter(item=>item.path === param)[0].category
    const {products} = useStore().store
    const array = products.filter(item => item.category === category)

    
  return (
    <ProductList products={array}/>
  )
}

export default CategoryList