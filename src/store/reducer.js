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
    
        default:
            return state;
    }
}

export default reducer