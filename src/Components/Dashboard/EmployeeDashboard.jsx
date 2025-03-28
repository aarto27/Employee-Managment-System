import React from 'react'
import Header from '../other/Header'
import './EmployeeDashboard.css'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data}) => {
  return (
    <div className='EmployeeDB'>
        <Header data = {data}/>
        <TaskListNumber data = {data} />
        <TaskList data = {data} />
    </div>
  )
}

export default EmployeeDashboard