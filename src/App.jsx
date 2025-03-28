import { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthProvider } from "./context/AuthContext";

function App() {

 const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("loggedInUser");
  return savedUser ? JSON.parse(savedUser).role : null;
});

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (email, password) => {
    if (data) {
      const admin = data.admin.find(
        (e) => e.email === email && e.password === password
      );
      if (admin) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        setUser("admin");
        return;
      }
      const employee = data.employee.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" }));
          setUser("employee");
        return;
      }
    }
  };

  const data = useContext(AuthProvider);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard  />
      ) : (
        <EmployeeDashboard  data ={loggedInUser}/>
      )}
    </>
  );
}

export default App;
