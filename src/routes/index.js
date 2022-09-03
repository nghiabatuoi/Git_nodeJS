const express = require("express");
const app = express();
const newsRouter = require("./news.route");
const siteRoute = require("./site.route");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRoute);
  app.use("/search", siteRoute);
}

module.exports = route;
