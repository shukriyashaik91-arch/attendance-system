const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  totalClasses: Number,
  attendedClasses: Number
});

module.exports = mongoose.model("Student", studentSchema);