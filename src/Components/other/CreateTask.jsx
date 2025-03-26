import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="AdminDB-Form">
        <form>
          <h3>Task Title</h3>
          <input type="text" placeholder="Make a UI desgin" />
          <h3>Description</h3>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <h3>Date</h3>
          <input type="date" />
          <h3>Asign</h3>
          <input type="text" placeholder=" Name of Employee" />
          <h3>Category</h3>
          <input type="text" />
          <br />
          <br />
          <button className="Create-Btn">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
