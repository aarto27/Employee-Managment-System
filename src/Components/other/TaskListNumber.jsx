import React from "react";

const TaskListNumber = () => {
  return (
    <div className="TaskListNumber">
      <div className="TLN-Item" style={{ backgroundColor: "lightpink" }}>
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
      <div className="TLN-Item" style={{ backgroundColor: "lightblue" }}>
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
      <div className="TLN-Item" style={{ backgroundColor: "lightgreen" }}>
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
      <div className="TLN-Item" style={{ backgroundColor: "gold" }}>
        <h2>0</h2>
        <h3>New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
