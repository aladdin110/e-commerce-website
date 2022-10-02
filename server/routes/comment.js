import express from 'express';
import { createComment, deleteComment, getComments, updateComment } from '../services/comment.js';

var CommentRouter = express.Router();

//route for comment get request
CommentRouter.get('/getComments', (req, res) => {
    //call the corresponding function from comment service
    getComments(req,res);
});

//route for comment post request
CommentRouter.post('/createComment', (req, res) => {
    //call the corresponding function from comment service
    createComment(req,res);
});

//route for comment put request
CommentRouter.put('/updateComment', (req, res) => {
    //call the corresponding function from comment service
    updateComment(req,res);
});

//route for comment delete request
CommentRouter.delete('/deleteComment', (req, res) => {
    //call the corresponding function from comment service
    deleteComment(req,res);
});

export default CommentRouter;