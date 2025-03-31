import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="TaskListNumber">
      <div className="TLN-Item" style={{ backgroundColor: "lightpink" }}>
        <h2>{data.taskNumber.active}</h2>
        <h3>Active Task</h3>
      </div>
      <div className="TLN-Item" style={{ backgroundColor: "lightblue" }}>
        <h2>{data.taskNumber.new_task}</h2>
        <h3>New Task</h3>
      </div>
      <div className="TLN-Item" style={{ backgroundColor: "lightgreen" }}>
        <h2>{data.taskNumber.completed}</h2>
        <h3>Completed Task</h3>
      </div>
      <div className="TLN-Item" style={{ backgroundColor: "gold" }}>
        <h2>{data.taskNumber.failed}</h2>
        <h3>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
