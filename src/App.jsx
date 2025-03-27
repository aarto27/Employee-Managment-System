import { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  // useEffect(() => {
  //   setLocalStorage()
  // },)

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (email, password) => {
    if (data) {
      const admin = data.admin.find(
        (e) => e.email === email && e.password === password
      );
      if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        return;
      }
      const employee = data.employee.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        return;
      }
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
