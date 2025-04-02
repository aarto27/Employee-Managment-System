import React from 'react';

const CompleteTask = ({ task, onComplete }) => {
  return (
    <div>
      <div className="CompletedTask">
        <div className="TaskList-Header">
          <h3>{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2>{task.taskTitle}</h2>
        <p>{task.taskDescription}</p>
        <div>
          <button className="complete-btn" onClick={() => onComplete(task.id)}>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;