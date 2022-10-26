import React,{useContext, createContext, useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const MobileContext = createContext()
export const useMobile = () => useContext(MobileContext)

const MobileProvider = ({children,...props}) => {
    const [mobile,setMobile] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        setMobile(false)
    },[location])

  return (
    <MobileContext.Provider value={{mobile,setMobile}}>
        {children}
    </MobileContext.Provider>
  )
}

export default MobileProvider