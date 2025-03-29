import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext(); // Corrected context name

const AuthProvider = ({ children }) => { // Corrected component name

  const [userData, setUserData] = useState();
  setLocalStorage();

  useEffect(() => {
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}> // Corrected context usage
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider; // Corrected export name