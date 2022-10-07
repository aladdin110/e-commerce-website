import express from 'express';
import { authenticate, checkToken } from '../services/auth.js';


var AuthRouter = express.Router();


//route for authentication post request
AuthRouter.post("/", (req, res) => {
    authenticate(req, res);
});

//route for verifying token
AuthRouter.get("/check", (req, res) => {
    checkToken(req, res);
});

export default AuthRouter;