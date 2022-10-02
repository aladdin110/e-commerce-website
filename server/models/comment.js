import mongoose from 'mongoose';
import { model } from 'mongoose';
const Schema = mongoose.Schema;

//our model schema to represent comment collection in db
const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    date: {
        type: Date,
        default : Date.now,
        required: true
    },
    rating: {
        type: Number,
    }

});

//create and export comment model from the above schema
export const Comment =  model('Comment', commentSchema);