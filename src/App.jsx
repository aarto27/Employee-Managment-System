import { useState, useContext, useEffect } from "react";
import "./App.css";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider"; // Use the context object, not the provider

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    return savedUser ? JSON.parse(savedUser).role : null;
  });

  const [loggedInUser, setLoggedInUser] = useState();

  const data = useContext(AuthContext); 

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    console.log(loggedInUser);
  },[])

  if (!data) {
    return null;
  }

  const handleLogin = (email, password) => {
    if (data) {
      const admin = data.admin.find(
        (e) => e.email === email && e.password === password
      );

      if (admin) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", ...admin }));
        setLoggedInUser(admin);
        setUser("admin");
        return;
      }

      const employee = data.employee.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", ...employee }));
        return;
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUser} />
      ) : (
        <EmployeeDashboard data={loggedInUser} />
      )}
    </>
  );
}

export default App;