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
    //store request body
    const {sku, label, categories, shortDescription, fullDescription, price, quantity, tags, images} = req.body;
    const tag = tags.split(',')
    const category = categories.split(',')
    const image = images.split(',')
    const product = new Product({
        sku, 
        label, 
        category, 
        shortDescription, 
        fullDescription, 
        price, 
        quantity, 
        tag, 
        image, 
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
    //store request body
    const {_id, sku, label, categories, shortDescription, fullDescription, price, quantity, tags, images, variation} = req.body;
    const tag = tags.split(',')
    const category = categories.split(',')
    const image = images.split(',')
    //updating by using findOneAndUpdate witch takes the match object and the update object as arguments
    const product = await Product.findOneAndUpdate({_id: _id},
        { sku, label, category, shortDescription, fullDescription, price, quantity, tag, image, variation}, 
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

