/* user requests handling service*/

import {User} from "../models/user.js";
import bcrypt from "bcryptjs";

//handle get users request
export const getUsers = async(req, res) => {
    //fetch users and send them in response
    const users = await User.find();
    res.send(users);
}

//handle create user request
export const createUser = async(req, res) => {
    //store request body
    const {firstName, lastName, email, phone, username, password} = req.body;
    const user = new User({
        firstName,
        lastName,
        email,
        phone,
        username,
        password
    })
    //encrypt password before saving
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    //attempt to save created user in db
    user.save((err, user) => {
        if(err){
            res.json({error: err});
        }
        res.json(user);
    });
} 

//handle update user request
export const updateUser = async(req, res) => {
    //store request body
    const {_id, firstName, lastName, email, phone, username, password, cart, history} = req.body;
    //updating by using findOneAndUpdate witch takes the match object and the update object as arguments
    const user = await User.findOneAndUpdate({_id: _id},
        { firstName, lastName, email, phone, username, password, cart, history}, 
        { new: true}).catch((err) => res.json(err));
    res.json(user);
}

//handle delete user request
export const deleteUser = async(req, res) => {
    //retrieve user id from request body
    const id = req.body._id;
    const user = await User.findByIdAndDelete(id).catch( (err) => res.json(err));
    res.json(user);
}