const express = require("express");
const siteControllers = require("../app/controllers/SiteControllers");
const route = express.Router();

route.get("/search", siteControllers.search);
route.get("/", siteControllers.index);

module.exports = route;
