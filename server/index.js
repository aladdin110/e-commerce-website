import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductRouter from './routes/product.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use(ProductRouter);

const CONNECTION_URL = 'mongodb+srv://medaminetanouyat4:Wdp1fp7z9E8TEE2Q@cluster0.of5gle5.mongodb.net/ecommercedb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
//mongoose.set('useFindAndModify', false);