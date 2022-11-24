import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductRouter from './routes/product.js';
import UserRouter from './routes/user.js';
import OrderRouter from './routes/order.js';
import CommentRouter from './routes/comment.js';
import AuthRouter from './routes/auth.js';


//init express app
const app = express();

//configure app (json parser and body parser)
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json());
app.use(cors());


//include app routers
app.use('/product', ProductRouter);
app.use('/user', UserRouter);
app.use('/order', OrderRouter);
app.use('/comment', CommentRouter);
app.use('/authenticate', AuthRouter);

//db string and server port
const CONNECTION_URL = 'mongodb+srv://medaminetanouyat4:Wdp1fp7z9E8TEE2Q@cluster0.of5gle5.mongodb.net/ecommercedb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;


//db connection and server launch
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
//mongoose.set('useFindAndModify', false);