import React from 'react'
import './AdminDashboard.css'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'

const AdminDashboard = ({data ,setUser}) => {
  console.log(data);
  return (
    <div className='AdminDB'>
        <Header admin={data} setUser={setUser}/>
        <CreateTask />
    </div>
  )
}

export default AdminDashboard