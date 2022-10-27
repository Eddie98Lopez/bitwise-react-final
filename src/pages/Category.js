import React from 'react'
import { Outlet } from 'react-router-dom'

const Category = (props) => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Category