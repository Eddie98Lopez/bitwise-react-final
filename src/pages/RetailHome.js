import React from 'react'
import ProductList from '../components/ProductList';
import { useStore } from '../store/StoreProvider';


const RetailHome = (props) => {
    const {loading,products} = useStore().store
    const sorted = products.sort((a,b)=>a.id-b.id)
  return (
    <div>

        {loading !== true > 0 && <ProductList products={sorted}/>}
 
    
    </div>
  )
}

export default RetailHome