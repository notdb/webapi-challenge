const express = require("express");
const server = express();
// routes for project and actions
const actionRouter = require("./data/helpers/actionRouter.js");
const projectRouter = require("./data/helpers/projectRouter.js");

server.use(express.json());
server.use("/actions", actionRouter);
server.use("/projects", projectRouter);

module.exports = server;
