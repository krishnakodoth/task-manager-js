import React, { useState } from "react";
import { addNewTaskApi } from "../api/taskApis";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    addNewTaskApi({ title, description})
    .then(() => window.location.reload())
    .catch((err) => console.log(err));
  };

  return (
    <div className="add-task">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
