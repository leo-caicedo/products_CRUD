const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 0) throw new Error("price must be a positive decimal.");
    },
  },
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
