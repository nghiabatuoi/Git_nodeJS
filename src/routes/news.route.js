const express = require("express");
const route = express.Router();
const newControllers = require("../app/controllers/NewsControllers");

route.get("/:slug", newControllers.show);
route.get("/", newControllers.index);

module.exports = route;
