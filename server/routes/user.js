import express from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../services/user.js';

var UserRouter = express.Router();

//route for user get request
UserRouter.get('/getUsers', (req, res) => {
    //call the corresponding function from user service
    getUsers(req,res);
});

//route for user post request
UserRouter.post('/createUser', (req, res) => {
    //call the corresponding function from product service
    createUser(req,res);
});

//route for user put request
UserRouter.put('/updateUser', (req, res) => {
    //call the corresponding function from product service
    updateUser(req,res);
});

//route for user delete request
UserRouter.delete('/deleteUser', (req, res) => {
    //call the corresponding function from product service
    deleteUser(req,res);
});

export default UserRouter;