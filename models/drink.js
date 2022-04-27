// name, image, price, discount

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkModel = new Schema({
  name: {
    type: String,
    require,
  },
  image: {
    type: String,
    require,
  },
  price: {
    type: Number,
    require,
  },
  discount: {
    type: Number,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("drinks", drinkModel);
