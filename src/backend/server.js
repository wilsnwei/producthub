import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productsRouter from "./routes/products-routers.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/products", productsRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port ${PORT}`);
});
