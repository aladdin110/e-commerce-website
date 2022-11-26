import { Schema, model } from 'mongoose';

//our model schema to represent product collection in db
const productSchema = new Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    label: {
        type: String,
        required: true,
        unique: true
    },
    category:[
        {
            type: String,
            required: true
        }
    ],
    shortDescription: {
        type: String,
    },
    longDescription: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    offerEnd: {
        type: Date,
    },
    new: {
        type: Boolean,
        required: true,
    },
    rating: {
        type: Number,
    },
    tag: [
        {
            type: String,
        }
    ],
    image: [
       {
        type: String,
       }
    ],
    variation: [
        {
            color: {
                type: String,
            },
            image: {
                type: String,
            },
            size: [
                {
                    name: {
                        type: String,
                    },
                    stock: {
                        type: Number,
                    }
                }
            ]
        }
    ]

});

//create and export product model from the above schema
export const Product =  model('Product', productSchema);