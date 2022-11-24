/* authentication request handling service*/
import passportJwt from 'passport-jwt';
var ExtractJwt = passportJwt.ExtractJwt;
import { User } from '../models/user.js';
import bcrypt from "bcryptjs";


import { secretKey } from '../config.js';
import jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens

//handle authentication request
export const authenticate = async (req, res) => {
    const {username, password} = req.body;
    //first we check username
    const user = await User.findOne({username: username},'-__v');
    //check if password is equal to hashed stored in db
    if (!user || !bcrypt.compareSync(password, user.password)) {
        res.json({"response": "Nom d'utilisateur ou mot de passe incorrect"})
    }
    else {
        //sign user with jwt token
        jwt.sign({username, password}, secretKey,
            {expiresIn: 3600}, function(err, token) {
                if (err) {
                    res.json(err);
                } 
                res.json({user, token});    
        });  
    }   
}

//handle checking token request
export const checkToken = (req, res) => {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = secretKey;    
    //check if jwt token is valid or not
    jwtPassport = passport.use(new JwtStrategy(opts,
        (jwt_payload, done) => {
            console.log("JWT payload: ", jwt_payload);
            User.findOne({_id: jwt_payload._id}, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                else if (user) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            });
        }));
    
}