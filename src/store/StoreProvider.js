import React, {useState, useContext, createContext} from 'react'
import reducer from './actions'
import initialStore from './initialStore'

//Create StoreContext
const StoreContext = createContext()

//Custom hook to use store context
export const useStore = () => useContext(StoreContext)


//Create a parent store provider to wrap the entire app
const StoreProvider = ({children,...props}) => {
    const [store,setStore] = useState(initialStore)

    const dispatch = (action)=>{
        setStore(reducer(store,action))
    }

  return (
    <StoreContext.Provider value={{store,dispatch}}>
        {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider