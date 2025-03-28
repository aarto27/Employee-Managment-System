import React from "react";

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="TaskList">
      <div className="TaskList-Item">
        <div className="TaskList-Header">
          <h3>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2> {data.tasks[0].task_title}</h2>
        <p>
          {data.tasks[0].task_description}
        </p>
      </div>
      <div className="TaskList-Item">
        <div className="TaskList-Header">
          <h3>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2> {data.tasks[1].task_title}</h2>
        <p>
        {data.tasks[1].task_description}
        </p>
      </div>
    </div>
  );
};

export default TaskList;
