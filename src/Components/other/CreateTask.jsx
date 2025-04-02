import { useState, useEffect } from "react";

export const newTask = (
  taskTitle,
  taskDescription,
  assign,
  taskDate,
  category
) => {
  return {
    taskTitle,
    taskDescription,
    assign,
    taskDate,
    category,
    newtask: true,
    active: false,
    failed: false,
    completed: false,
  };
};

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [assign, setAssign] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(savedEmployees);
    console.log(savedEmployees);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const taskData = newTask(
      taskTitle,
      taskDescription,
      assign,
      taskDate,
      category
    );

    const updatedEmployees = employees.map((employee) => {
      if (employee.username === assign) {
        return {
          ...employee,
          task: [...(employee.task || []), taskData],
          taskNumber: {
            ...employee.taskNumber,
            newtask: (employee.taskNumber.newtask || 0) + 1,
          },
        };
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([...allTasks, taskData]));

    setEmployees(updatedEmployees);

    console.log(updatedEmployees);

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
        <form onSubmit={submitHandler}>
          <h3>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
          />
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <h3>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
          />
          <h3>Assign</h3>
          <input
            value={assign}
            onChange={(e) => setAssign(e.target.value)}
            type="text"
            placeholder="Name of Employee"
          />
          <h3>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
