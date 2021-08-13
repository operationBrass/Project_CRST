const bcrypyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError} = require("apollo-server");

const User = require('../../models/User');
const {SECRET_KEY} = require('../../config')
const {validateRegisterInput} = require('../../util/validators') // needs destructing as not default export.


module.exports = {
    Mutation: {
        async register(parent,//parent is likely undefined..
            { 
                registerInput: { username,password,confirmPassword}},
                context,
                info
            ){ 
           
            const {valid, errors} = validateRegisterInput(username,password,confirmPassword)
            if(!valid)
            {
                throw new UserInputError("erorrs",{errors})
            }
            //TODO: make sure user doesnt already exist

            const user = await User.findOne({ username });
            if(user){
                throw new UserInputError("username is already in use",
                {errors:{
                    username:"this username is taken"
                    }
                })
            }
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