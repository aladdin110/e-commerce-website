/* order requests handling service*/

import {Order} from "../models/order.js"

//handle get users request
export const getOrders = async(req, res) => {
    //fetch users and send them in response
    const orders = await Order.find();
    res.send(orders);
}

//handle create order request
export const createOrder = async(req, res) => {
    //store request body
    const {products, userId, date, totalPrice} = req.body;
    const order = new Order({
        products,
        userId,
        date,
        totalPrice,
    })
    //attempt to save created user in db
    order.save((err, order) => {
        if(err){
            res.json({error: err});
        }
        res.json(order);
    });
} 

//handle update order request
export const updateOrder = async(req, res) => {
    //store request body
    const {_id, products, userId, date, totalPrice} = req.body;
    //updating by using findOneAndUpdate witch takes the match object and the update object as arguments
    const order = await Order.findOneAndUpdate({_id: _id},
        { products, userId, date, totalPrice}, 
        { new: true}).catch((err) => res.json(err));
    res.json(order);
}

//handle delete order request
export const deleteOrder = async(req, res) => {
    //retrieve user id from request body
    const id = req.body._id;
    const order = await Order.findByIdAndDelete(id).catch( (err) => res.json(err));
    res.json(order);
}