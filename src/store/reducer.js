const reducer = (state,action) => {
    const {type,payload} = action

    switch (type) {
        case "FETCH_PRODUCTS": 
            return {...state, products: payload, loading:false}
        case "LOAD":
            return {...state,loading: true}
        case "END_LOAD":
            return {...state, loading:false}
        case "ADD_FAVORITE":
            return {...state, products:[...state.products.filter(item => item.id != payload.id), payload]}

        case "ADD_CART":
            return {...state,cart:[...state.cart, payload]}
        case "REMOVE_FROM_CART": 
            return {...state, cart:state.cart.filter(item=>item.id !== payload)}
        case "EMPTY_CART":
            return {...state,cart:[]}
    
        default:
            return state;
    }
}

export default reducer