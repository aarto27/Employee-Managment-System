import React from 'react'

const NewTask = ({task}) => {
  return (
    <div>
         <div className="NewTask">
        <div className="TaskList-Header">
          <h3>{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2> {task.taskTitle}</h2>
        <p>
          {task.taskDescription}
        </p>
        <div>
            <button className="Acc-Task">Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask