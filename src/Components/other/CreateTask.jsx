import { useState } from "react";

const CreateTask = () => {


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [assign, setAssign] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      taskTitle,
      taskDescription,
      assign,
      taskDate,
      category,
      newtask: true,
      active: false,
      failed: false,
      completed: false,
    });
    const data = JSON.parse(localStorage.getItem('employees'))
    console.log(data);
    data.forEach((elem) => {
      if (assign === elem.username) {  
        console.log("Assigning to:", elem.username);
        console.log("Previous Tasks:", elem.task);
        elem.task.push(task);
        elem.taskNumber.newtask = elem.taskNumber.newtask +1
        console.log("Updated Tasks:", elem.task);
      }
    });
    localStorage.setItem("employees", JSON.stringify(data));

    setTimeout(() => {
      setTaskTitle("");
      setTaskDescription("");
      setTaskDate("");
      setCategory("");
      setAssign("");
    }, 1000);
  };

  return (
    <div>
      <div className="AdminDB-Form">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            type="text"
            placeholder="Make a UI desgin"
          />
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <h3>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            type="date"
          />
          <h3>Asign</h3>
          <input
            value={assign}
            onChange={(e) => {
              setAssign(e.target.value);
            }}
            type="text"
            placeholder=" Name of Employee"
          />
          <h3>Category</h3>
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
          />
          <br />
          <br />
          <button className="Create-Btn">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;