const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: String
});

module.exports = mongoose.model("Attendance", attendanceSchema);