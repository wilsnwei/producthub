import Product from "../models/Product.js";

export default class ProductsServices {
  static async getProducts() {
    const products = await Product.find({});
    return products;
  }
  static async createProduct(data) {
    const newProduct = new Product(data);
    await newProduct.save();
    return newProduct;
  }

  static async updateProduct(productId, data) {
    const updatedProduct = await Product.findByIdAndUpdate(productId, data, {
      new: true,
    });
    return updatedProduct;
  }

  static async deleteProduct(productId) {
    await Product.findByIdAndDelete(productId);
  }
}
