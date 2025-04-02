import React from 'react';

const FailedTask = ({ task, onFail }) => {
  return (
    <div>
      <div className="FailedTask">
        <div className="TaskList-Header">
          <h3>{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2>{task.taskTitle}</h2>
        <p>{task.taskDescription}</p>
        <div>
          <button className="failed-btn" onClick={() => onFail(task.id)}>Failed</button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;