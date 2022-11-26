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
        default: 100,
    },
    available: {
        type: Boolean,
        required: true,
        default: false
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    discount: {
        type: Number
    },
    offerEnd: {
        type: Date,
    },
    recent: {
        type: Boolean,
        required: true,
        default: true,
    },
    rating: {
        type: Number,
        default: 4
    },
    saleCount: {
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