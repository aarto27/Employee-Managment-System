import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import './TaskList.css'

const TaskList = ({ data }) => {
  return (
    <div id="tasklist" className="TaskList">
      {data?.task.map((elem, index) => {
        if (elem.newtask) {
          return <NewTask key={index} task={elem} />;
        } else if (elem.completed) {
          return <CompleteTask key={index} task={elem} />;
        } else if (elem.failed) {
          return <FailedTask key={index} task={elem} />;
        } else if (elem.active) {
          return <AcceptTask key={index} task={elem} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TaskList;