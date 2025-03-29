import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className="TaskList">
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} task={elem} />; 
        }
      })}
    </div>
  );
};

export default TaskList;