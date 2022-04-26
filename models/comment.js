const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentModel = new Schema({
  name: {
    type: String,
    require,
  },
  position: {
    type: String,
    require,
  },
  avatar: {
    type: String,
  },
  comment: {
    type: String,
    require,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("comments", commentModel);
