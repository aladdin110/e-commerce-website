/* comment requests handling service*/

import {Comment} from "../models/comment.js"

//handle get comments request
export const getComments = async(req, res) => {
    //fetch users and send them in response
    const comments = await Comment.find();
    res.send(comments);
}

//handle create comment request
export const createComment = async(req, res) => {
    //store request body
    const {content, userId, productId, date, rating} = req.body;
    const comment = new Comment({
        content,
        userId,
        productId,
        date,
        rating,
    })
    //attempt to save created comment in db
    comment.save((err, comment) => {
        if(err){
            res.json({error: err});
        }
        res.json(comment);
    });
} 

//handle update comment request
export const updateComment = async(req, res) => {
    //store request body
    const {_id, content, userId, productId, date, rating} = req.body;
    //updating by using findOneAndUpdate witch takes the match object and the update object as arguments
    const comment = await Comment.findOneAndUpdate({_id: _id},
        { content, userId, productId, date, rating}, 
        { new: true}).catch((err) => res.json(err));
    res.json(comment);
}

//handle delete comment request
export const deleteComment = async(req, res) => {
    //retrieve comment id from request body
    const id = req.body._id;
    const comment = await Comment.findByIdAndDelete(id).catch( (err) => res.json(err));
    res.json(comment);
}