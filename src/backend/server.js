import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productsRouter from './routes/products-routers.js';

dotenv.config()

const app = express();
app.use(express.json())

app.use('/products', productsRouter)

app.listen(3000, () => {
  connectDB()
  console.log(`Server started at port 3000`)
})