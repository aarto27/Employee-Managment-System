import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log("TaskList===>",data?.task);
  return (
    <div id="tasklist" className="TaskList">
      {data?.task.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} task={elem} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TaskList;