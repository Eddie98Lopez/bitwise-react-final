const reducer = (state,action) => {
    const {type,payload} = action

    switch (type) {
        case "LOAD":
            return {...state,loading: true}
        case "END_LOAD":
            return {...state, loading:false}
    
        default:
            return state;
    }
}

export default reducer