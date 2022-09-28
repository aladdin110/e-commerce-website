/* product requests handling service*/

import {Product} from "../models/product.js"

//handle get products request
export const getProducts = async(req, res) => {
    //fetch products and send them in response
    const products = await Product.find();
    res.send(products);
}

//handle create product request
export const createProduct = async(req, res) => {
    //store request body in object
    const {label, category, available, quantity, description} = req.body;
    const product = new Product({
        label,
        category,
        available,
        quantity,
        description
    })
    //attempt to save created product in db
    product.save((err, product) => {
        if(err){
            res.json({error: err});
        }
        res.json(product);
    });
}

//handle update product request
export const updateProduct = async(req, res) => {
    //store request body in object
    const {_id, label, category, available, quantity, description} = req.body;
    //updating by using findOneAndUpdate witch takes the match object and the update object as arguments
    const product = await Product.findOneAndUpdate({_id: _id},
        { label, category, available, quantity, description}, 
        { new: true}).catch((err) => res.json(err));
    res.json(product);
}

//handle delete product request
export const deleteProduct = async(req, res) => {
    //retrieve product id from request body
    const id = req.body._id;
    const product = await Product.findByIdAndDelete(id).catch( (err) => res.json(err));
    res.json(product);
}

