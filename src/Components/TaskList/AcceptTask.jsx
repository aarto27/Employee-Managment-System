import { useState } from 'react';

const AcceptTask = ({ task }) => {
  const [taskName, setTaskName] = useState(task.taskTitle);

  return (
    <div>
      <div className="AcceptTask">
        <div className="TaskList-Header">
          <h3>{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2>{taskName}</h2>
        <p>{task.taskDescription}</p>
        <div>
          <button className="Mark-Comp" onClick={() => setTaskName('Completed')}>Mark as Complete</button>
          <button className="Mark-Fail" onClick={() => setTaskName('Failed')}>Mark as Failed</button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;