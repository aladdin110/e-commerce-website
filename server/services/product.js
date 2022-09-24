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

