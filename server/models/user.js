import mongoose from 'mongoose';
import { model} from 'mongoose';
const Schema = mongoose.Schema;

//our model schema to represent user collection in db
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    hisotry: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
});

//create and export user model from the above schema
export const User =  model('User', userSchema);