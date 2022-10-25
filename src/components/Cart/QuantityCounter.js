import React from 'react'
import { useStore } from '../../store/StoreProvider'

const QuantityCounter = ({qty,...props}) => {
    const {dispatch} = useStore()

    const upQuantity = (e) => {
        console.log(qty + 1)
    }
    const downQuantity = (e) => {
        console.log(qty - 1)
    }
    
  return (
    <div>

    </div>
  )
}

export default QuantityCounter