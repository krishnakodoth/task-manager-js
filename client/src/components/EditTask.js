import React, { useState } from "react";
import DialogBox from "./DialogBox";
import { updateTaskApi } from "../api/taskApis";

const EditTask = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const updateTask = () => {
      updateTaskApi(task._id,{
        title,
        description,
        status,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <DialogBox>
      <div className="update-task">
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
        <div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={"todo"}>Todo</option>
            <option value={"done"}>Done</option>
          </select>
        </div>
        <div className="button-row">
          <button className="btn primary" onClick={updateTask}>
            Update
          </button>
          <button className="btn secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </DialogBox>
  );
};

export default EditTask;
