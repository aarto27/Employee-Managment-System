import { useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login.jsx'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <EmployeeDashboard />
      <AdminDashboard />
    </>
  )
}

export default App
