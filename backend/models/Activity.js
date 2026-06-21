const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  website: String,
  timeSpent: Number,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =
mongoose.model("Activity", ActivitySchema);
