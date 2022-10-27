const remFromCart = (dispatch,id) => {

    dispatch({
        type:'REMOVE_FROM_CART',
        payload:id
    })

}

export const emptyCart = (dispatch) => {
    dispatch({type:"EMPTY_CART"})

}

export default remFromCart