import React from 'react'
import Header from '../other/Header'
import './EmployeeDashboard.css'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div className='EmployeeDB'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard