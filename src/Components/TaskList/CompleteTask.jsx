import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div>
         <div className="TaskList-Item">
        <div className="TaskList-Header">
          <h3>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2> {task.task_title}</h2>
        <p>
          {task.task_description}
        </p>
        <div>
            <button className="complete-btn">Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask