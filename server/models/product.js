import { Schema, model } from 'mongoose';

//our model schema to represent product collection in db
const productSchema = new Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
});

//create and export product model from the above schema
export const Product =  model('Product', productSchema);