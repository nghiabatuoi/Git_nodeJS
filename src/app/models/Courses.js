const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { collection: "courses" }
);

module.exports = mongoose.model("Courses", Courses);
