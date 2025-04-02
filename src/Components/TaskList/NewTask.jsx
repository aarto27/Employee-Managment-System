import { useState, useEffect } from "react";

const NewTask = () => {
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  console.log(tasks);

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="NewTask">
            <div className="TaskList-Header">
              <h3>{task?.category || "No Category"}</h3>
              <h4>{task?.taskDate || "No Date"}</h4>
            </div>
            <h2>{task?.taskTitle || "No Title"}</h2>
            <p>{task?.taskDescription || "No Description"}</p>
            <div>
              <button className="Acc-Task">Accept Task</button>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default NewTask;
