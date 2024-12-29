import mongoose from "mongoose";
import ProductsServices from "../services/products-services.js";

export default class ProductsControllers {
  static async getProducts(req, res) {
    try {
      const products = await ProductsServices.getProducts();
      return res.status(200).json(products);
    } catch (error) {
      return res
        .status(500)
        .json({ success: "false", message: "Error fetching products" });
    }
  }

  static async createProduct(req, res) {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    try {
      const newProduct = await ProductsServices.createProduct(product);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res
        .status(500)
        .json({ success: "false", message: "Error creating product" });
    }
  }

  static async updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: "false", message: "Product not found" });
    }
    try {
      const updatedProduct = await ProductsServices.updateProduct(id, product);
      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res
        .status(500)
        .json({ success: "false", messagee: "Error updating product" });
    }
  }

  static async deleteProduct(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: "false", message: "Product not found" });
    }
    try {
      await ProductsServices.deleteProduct(id);
    } catch (error) {
      return res
        .status(500)
        .json({ success: "false", message: "Server error" });
    }
    return res.json({ success: "true", message: "Product deleted" });
  }
}
