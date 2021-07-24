// model
const { Product } = require("../models/Product");

class ProductsService {
  async getProducts() {
    const products = await Product.find();
    return products || [];
  }

  async getProduct(id) {
    const product = await Product.findById(id);
    return product || {};
  }

  async createProduct(data) {
    const createdProduct = new Product(data);

    await createdProduct.save();
    return createdProduct;
  }

  async updateProduct(id, data) {
    const updatedProduct = await Product.findByIdAndUpdate(id, data);
    await updatedProduct.save();

    return updatedProduct;
  }

  async deleteProduct(id) {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  }
}

module.exports = ProductsService;
