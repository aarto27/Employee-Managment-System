import React from 'react'
import './AdminDashboard.css'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'

const AdminDashboard = ({savedUser}) => {
  return (
    <div className='AdminDB'>
        <Header  />
        <CreateTask />
    </div>
  )
}

export default AdminDashboard