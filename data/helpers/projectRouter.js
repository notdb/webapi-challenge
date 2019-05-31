const express = "express";
const projMod = require("./projectModel.js");

const router = require("express").Router();

// read (get) requests

router.get("/", async (req, res) => {
  try {
    const projects = await projMod.get(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error retrieving the projects"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projects = await projMod.getProjectActions(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error retrieving the projects"
    });
  }
});

// create (insert) request

router.post("/", async (req, res) => {
  try {
    const projects = await projMod.insert(req.body);
    if (!req.body.name || !req.body.description) {
      res
        .status(400)
        .json({ message: "need both name and description fields" });
    } else {
      res.status(201).json({ message: "new project added" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error retrieving the projects"
    });
  }
});

// update (put) request

router.put("/:id", async (req, res) => {
  try {
    const projects = await projMod.update(req.params.id, req.body);
    if (!req.body) {
      res.status(400).json({ message: "need to have a body to change" });
    } else {
      res.status(200).json(projects);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error updating the project"
    });
  }
});

// delete (delete) request

router.delete("/:id", async (req, res) => {
  try {
    const projects = await projMod.remove(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error updating the project"
    });
  }
});

module.exports = router;
