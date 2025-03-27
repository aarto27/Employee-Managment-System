import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthProvider = createContext()
const AuthContext = ({children}) => {

  // const [userData, setUserData] = useState()

  const data = getLocalStorage()
  console.log(data);


  return (
    <div> 
      <AuthProvider.Provider value={data}>
      {children}
      </AuthProvider.Provider>
    </div>
  )
}

export default AuthContext