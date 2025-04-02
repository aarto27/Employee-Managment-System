import { useState, useEffect } from "react";

const NewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (savedUser) {
        setLoggedInUser(savedUser.username);
      }
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(savedTasks);
    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
      setTasks([]);
    }
  }, []);


  const assignedTasks = tasks.filter((task) => task?.assign === loggedInUser);


  return (
    <div className="newtask">
      {assignedTasks.length > 0 ? (
        assignedTasks.map((task, index) => (
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
        <p>No tasks assigned to you.</p>
      )}
    </div>
  );
};

export default NewTask;
