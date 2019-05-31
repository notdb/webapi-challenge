const express = "express";
const projMod = require("./projectModel.js");

const router = require("express").Router();

// read (get) request

router.get("/:id", async (req, res) => {
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

module.exports = router;
