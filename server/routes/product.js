import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/product.js';

var ProductRouter = express.Router();


//route for product get request
ProductRouter.get('/getProducts', (req, res) => {
    //call the corresponding function from product service
    getProducts(req,res);
});

//route for product post request
ProductRouter.post('/createProduct', (req, res) => {
    //call the corresponding function from product service
    createProduct(req,res);
});

//route for product put request
ProductRouter.put('/updateProduct', (req, res) => {
    //call the corresponding function from product service
    updateProduct(req,res);
});

//route for product delete request
ProductRouter.delete('/deleteProduct', (req, res) => {
    //call the corresponding function from product service
    deleteProduct(req,res);
});

export default ProductRouter;