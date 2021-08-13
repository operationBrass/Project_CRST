const bcrypyt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const {SECRET_KEY} = require('../../config')


module.exports = {
    Mutation: {
        async register(parent,//parent is likely undefined..
            { 
                registerInput: { username,password,confirmPassword}},
                context,
                info
            ){ 
            //TODO: validation user data
            //TODO: make sure user doesnt already exist
            //TODO: Hash password before we store
            //TODO: auth token JWA.
            password = await bcrypyt.hash(password,12);
            const newUser = new User({
                username,
                password,
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();

            const token = jwt.sign({
                id:res.id,
                username:res.username
            },SECRET_KEY,{expiresIn: '1h'});

            return {
                ...res._doc,
                 id: res._id,
                 token
            }

        } 
     }
};