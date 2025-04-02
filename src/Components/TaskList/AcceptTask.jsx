import {useState} from 'react'
import { newTask } from '../other/CreateTask.jsx';  


const AcceptTask = ({task}) => {
  const taskList = newTask()
  const [taskName, setTaskName] = useState(taskList);

  return (
    <div>
         <div className="AcceptTask">
        <div className="TaskList-Header">
          <h3>{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2> {task.taskTitle}</h2>
        <p>
          {task.taskDescription}
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