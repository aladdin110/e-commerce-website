import express from 'express';
import {getOrders, createOrder, updateOrder, deleteOrder } from '../services/order.js';

var OrderRouter = express.Router();

//route for order get request
OrderRouter.get('/getOrders', (req, res) => {
    //call the corresponding function from order service
    getOrders(req,res);
});

//route for order post request
OrderRouter.post('/createOrder', (req, res) => {
    //call the corresponding function from order service
    createOrder(req,res);
});

//route for order put request
OrderRouter.put('/updateOrder', (req, res) => {
    //call the corresponding function from order service
    updateOrder(req,res);
});

//route for order delete request
OrderRouter.delete('/deleteOrder', (req, res) => {
    //call the corresponding function from order service
    deleteOrder(req,res);
});

export default OrderRouter;