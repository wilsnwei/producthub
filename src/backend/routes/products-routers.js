import express from "express";
import ProductsControllers from "../controllers/products-controllers.js";
const productsRouter = express.Router();

productsRouter.get("/", ProductsControllers.getProducts);

productsRouter.post("/new", ProductsControllers.createProduct);

productsRouter.put("/:id", ProductsControllers.updateProduct);

productsRouter.delete("/:id", ProductsControllers.deleteProduct);

export default productsRouter;
