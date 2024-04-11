import React, { useState } from "react";
import EditTask from "./EditTask";
import { deleteTaskApi } from "../api/taskApis";

const TaskItem = ({task}) => {
  const [showEditDialog,setShowEditDialog] = useState(false);
  const deleteTask = (taskId) => {
    deleteTaskApi(taskId)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className={`task-item ${task.status}`}  key={task._id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className="btn primary" onClick={() => setShowEditDialog(true)}>Edit</button>
      <button className="btn secondary" onClick={() => deleteTask(task._id)}>Delete</button>
      {
        showEditDialog && (
          <EditTask 
          task={task}
          onClose={()=>setShowEditDialog(false)}
          />
        )
      }
    </div>
  );
};

export default TaskItem;
