const remFromCart = (dispatch,id) => {

    dispatch({
        type:'REMOVE_FROM_CART',
        payload:id
    })

}

export default remFromCart