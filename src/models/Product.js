const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("price must be a positive decimal.");
    },
  },
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
