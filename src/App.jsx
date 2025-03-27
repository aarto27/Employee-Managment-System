import { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import {AuthProvider} from "./context/AuthContext";

function App() {
  // useEffect(() => {
  //   setLocalStorage()
  // },)
  const [user, setUser] = useState();

  const handleLogin = (email, password) => {
    if (email == "sanchit@singh.com" && password == "123") {
      setUser("admin");
    } else if (email == "nikita@sharma.com" && password == "123") {
      setUser("employee");
    }
  };

  const data = useContext(AuthProvider);
 

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;
