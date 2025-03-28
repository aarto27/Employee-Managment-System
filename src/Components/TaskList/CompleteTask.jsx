import React from 'react'

const CompleteTask = () => {
  return (
    <div>
         <div className="TaskList-Item">
        <div className="TaskList-Header">
          <h3>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        {/* <h2> {data.tasks?.[0].task_title}</h2> */}
        <p>
          {/* {data.tasks?.task_description} */}
        </p>
        <div>
            <button className="complete-btn">Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask