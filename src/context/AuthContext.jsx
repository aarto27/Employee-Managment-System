import React, { createContext, useState,useEffect } from 'react'
import { getLocalStorage , setLocalStorage} from '../utils/LocalStorage'

export const AuthProvider = createContext()
const AuthContext = ({children}) => {

  const [userData, setUserData] = useState()
  setLocalStorage()

   useEffect(() => {
    const {employee , admin} = getLocalStorage()
    setUserData({employee,admin})
   },[]);


  return (
    <div> 
      <AuthProvider.Provider value={userData}>
      {children}
      </AuthProvider.Provider>
    </div>
  )
}

export default AuthContext