/* authentication request handling service*/
import passportJwt from 'passport-jwt';
var ExtractJwt = passportJwt.ExtractJwt;

import { secretKey } from '../config.js';
import jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens

//handle authentication request
export const authenticate = (req, res) => {
    const {username, password} = req.body;
    //sign user with jwt token
    jwt.sign({username, password}, secretKey,
        {expiresIn: 3600}, function(err, token) {
            if (err) {
                res.json(err);
            } 
            res.json({username, password, token});    
        });
    
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