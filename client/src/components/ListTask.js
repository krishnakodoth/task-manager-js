import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { getTaskListApi } from "../api/taskApis";

const ListTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTaskListApi()
      .then((res) => {
        const resultData = [...res.data];
        resultData.sort((a, b) => {
          if (a.status === "todo" && b.status === "done") {
            return -1;
          } else if (a.status === "done" && b.status === "todo") {
            return 1;
          } else {
            return 0;
          }
        });
        setTasks(resultData);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="list-task">{tasks.map(task => <TaskItem key={task._id} task={task} />)}</div>;
};

export default ListTask;
