import mongoose from 'mongoose';
import { model } from 'mongoose';
const Schema = mongoose.Schema;


//our model schema to represent order collection in db
const orderSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default : Date.now,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }

});

//create and export order model from the above schema
export const Order =  model('Order', orderSchema);