import React from 'react'

const CartIcon = ({fill, stroke, ...props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="97.97" height="112.3" viewBox="0 0 97.97 112.3">
  <path id="Path_661" data-name="Path 661" d="M87.08,25.27H71.96C70.57,11.05,60.8,0,48.98,0S27.39,11.05,26.01,25.27H10.88L0,112.3H97.97L87.08,25.27ZM48.98,7c8.03,0,14.7,7.93,15.95,18.27H33.04C34.28,14.93,40.95,7,48.98,7ZM17.06,32.27H80.9l9.14,73.03H7.93Z" fill={fill || 'black'} strokeWidth='3px' stroke='black'/>
</svg>

  )
}

export default CartIcon