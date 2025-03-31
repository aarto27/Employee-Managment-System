import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log("TaskList===>", data);
  return (
    <div id="tasklist" className="TaskList">
      {data?.task.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} task={elem} />;
        } else if (elem.completed) {
          return <CompleteTask key={index} task={elem} />;
        } else if (elem.failed) {
          return <FailedTask key={index} task={elem} />;
        } else if (elem.new_task) {
          return <NewTask key={index} task={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
