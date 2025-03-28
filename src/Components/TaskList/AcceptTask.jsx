import React from 'react'

const AcceptTask = () => {
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
            <button className="Mark-Comp">Mark as Complete</button>
            <button className="Mark-Fail">Mark as Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask