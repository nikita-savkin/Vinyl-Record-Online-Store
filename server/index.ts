import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import productsRouter from './routes/products.js';

import productsMock from './mocks/products.js';
import filtersStructure from './mocks/filters-structure.js';

dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME ?? 'test_user';
const DB_PASSWORD = process.env.DB_PASSWORD ?? '4r9M9Yopp1htP2V8';
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = 'mongodb+srv://cluster0.zwjtosd.mongodb.net/vinyl-online-store?retryWrites=true&w=majority';
const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/products', productsRouter);

mongoose.set('strictQuery', true);

mongoose
  .connect(CONNECTION_URL, { user: DB_USERNAME, pass: DB_PASSWORD })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.error(error));

if (process.env.NODE_ENV === 'dev') {
  const connection = mongoose.connection;

  connection.on('open', async function () {
    const db = connection.db;
    const productsCollection = await db.collection('products');
    const filterStructure = await db.collection('filter-structure');
    const productsCount = await productsCollection.countDocuments();
    const filterCount = await filterStructure.countDocuments();

    if (!productsCount) await productsCollection.insertMany(productsMock);
    if (!filterCount) await filterStructure.insertMany(filtersStructure);
  });
}
