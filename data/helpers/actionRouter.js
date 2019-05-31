const express = "express";
const actionMod = require("./actionModel.js");

const router = require("express").Router();

//read (get) endpoint

router.get("/", async (req, res) => {
  try {
    const action = await actionMod.get(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error retreiving the actions"
    });
  }
});

//create (post) endpoint

router.post("/", async (req, res) => {
  try {
    const action = await actionMod.insert(req.body);
    if (!req.body.project_id || !req.body.description || !req.body.notes) {
      res.status(400).json({
        message: "a project_id, description, and notes properties are required"
      });
    } else {
      res.status(201).json(action);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error posting the project"
    });
  }
});

//update (put) endpoint

router.put("/:id", async (req, res) => {
  try {
    const action = await actionMod.update(req.params.id, req.body);
    if (!req.body) {
      res.status(400).json({ message: "you need to have a body to change" });
    } else {
      res.status(200).json(action);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error updating the action"
    });
  }
});

//delete (delete) endpoint

router.delete("/:id", async (req, res) => {
  try {
    const action = await actionMod.remove(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error updating the action"
    });
  }
});

module.exports = router;
