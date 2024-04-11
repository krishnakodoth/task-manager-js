const express = require("express");
// const Post = require("./models/Post");
const Task = require("../models/Task");
const router = express.Router();

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.post("/tasks", async (req, res) => {
  console.log(req.body)
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    await newTask.save();
	  // res.send(newTask)
    res.status(200).send("Task Created");

  } catch (err) {
    console.log(err)
    res.status(500).send("Server Error");
  }
});

router.delete('/tasks/:taskId', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.taskId);
        res.status(200).send('Task Deleted');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.put('/tasks/:taskId', async (req, res) => {
  try {
      await Task.findByIdAndUpdate(req.params.taskId,{
        title: req.body.title,
        description: req.body.description,
        status:req.body.status
      });
      res.status(200).send('Task Updated');
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

module.exports = router;
