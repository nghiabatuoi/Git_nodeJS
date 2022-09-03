const express = require("express");
//path
const path = require("path");
const app = express();
//Template engine
const { engine } = require("express-handlebars");

const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
//Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

const route = require("./routes");
const db = require("./config/db");
route(app);
//connect to DB
db.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
