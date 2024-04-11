import axios from "axios";

const nodeApi = process.env.NODE_API;

export const getTaskListApi = async () => axios.get(`${nodeApi}/tasks`)
export const addNewTaskApi = async (task) => axios.post(`${nodeApi}/tasks`,task);
export const deleteTaskApi = async (taskId) => axios.delete(`${nodeApi}/tasks/${taskId}`);
export const updateTaskApi = async (taskId,task) =>  axios.put(`${nodeApi}/tasks/${taskId}`, task);