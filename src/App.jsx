import { useState, useContext, useEffect } from "react";
import "./App.css";
import Login from "./Components/Auth/Login.jsx";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser).role : null;
  });

  const [loggedInUser, setLoggedInUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const data = useContext(AuthContext); 

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser.role);
      setLoggedInUser(parsedUser);
    }
    setIsLoading(false); 
  }, []);

  if (!data) {
    return null;
  }

  const handleLogin = (email, password) => {
    setIsLoading(true); 
    setTimeout(() => {  
      if (data) {
        const admin = data.admin.find(
          (e) => e.email === email && e.password === password
        );

        if (admin) {
          localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", ...admin }));
          setLoggedInUser(admin);
          setUser("admin");
        } else {
          const employee = data.employee.find(
            (e) => e.email === email && e.password === password
          );

          if (employee) {
            localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", ...employee }));
            setLoggedInUser(employee);
            setUser("employee");
          }
        }
      }
      setIsLoading(false); 
    }, 2000); 
  };


  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ); 
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUser} setUser={setUser} />
      ) : (
        <EmployeeDashboard data={loggedInUser} setUser={setUser}/>
      )}
    </>
  );
}

export default App;