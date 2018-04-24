const express = require("express");
const taskRoutes = express.Router();
const Task = require("../models/task");

taskRoutes.route("/")
    .get((req, res) => {
        Task.find({user: req.user._id}, (err, tasks) => {
          if (err) return res.status(500).send(err);
          res.send(tasks);
        })
    })
    .post((req, res) => {
        const newTask = new Task(req.body);
        newTask.user = req.user._id
        newTask.save(err => {
          if (err) return res.status(500).send(err);
          res.send(newTask);
        })
    })

  taskRoutes.route("/:id")
      .get((req, res) => {
          Task.findById({_id: req.params.id, user: req.user._id}, (err, task) => {
              if (err) return res.status(500).send(err);
              res.send(task);
          })
      })
      .put((req, res) =>{
        
          Task.findByIdAndUpdate({_id: req.params.id, user: req.user._id},req.body, {new:true}, (err, task) => {

              if (err) return res.status(500).send(err);
              if (task === null) res.status(404).send({"message": "Not found"})
              task = Object.assign(task, req.body)
              task.save(err => {
                  if (err) return res.status(500).send(err);

                  res.send(task)
              });
          })
      })
    .delete((req, res) => {
      Task.findByIdAndRemove({_id: req.params.id, user: req.user._id}, (err, task) => {
        if (err) return res.status(500).send(err);
        res.send(task);
      })
    })


module.exports = taskRoutes;
