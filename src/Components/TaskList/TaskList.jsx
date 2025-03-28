import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {


  return (
    <div id="tasklist" className="TaskList">
     {data.tasks.map((elem) =>{
      if(elem.active){
        return <AcceptTask />
      }
     })}
    </div>
  );
};

export default TaskList;
