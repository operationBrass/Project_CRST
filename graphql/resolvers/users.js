const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError} = require("apollo-server-express");

const User = require('../../models/User');
const {SECRET_KEY} = require('../../config') // keeping it hidden in the config file
const {validateRegisterInput,validateLoginInput} = require('../../util/validators') // needs destructing as not default export.

function generateToken(user)
{
    return jwt.sign({
        id:user.id,
        username:user.username
    },SECRET_KEY,{expiresIn: '1h'});
}

module.exports = {
    Mutation: {
        async login(parent,{username,password}){
            const {errors,valid} = validateLoginInput(username,password)
            const user = await User.findOne({username})

            if(!user){
                errors.general = "Incorrect Username or Password";
                throw new UserInputError("Username not found", {errors});
            }
            
            const match = await bcrypt.compare(password,user.password);
            if(!match)
            {
                errors.general = "Incorrect Username or Password";
                throw new UserInputError("Password not found", {errors});
            }

            // user can login now so generate a token
            const token = generateToken(user)

            return {
                ...user._doc,
                 id: user._id,
                 token
            }
        },
        async register(parent,//parent is likely undefined..
            { 
                registerInput: { username,password,confirmPassword}},
                context,
                info
            ){ 
           
            const {valid, errors} = validateRegisterInput(username,password,confirmPassword)
            if(!valid)
            {
                throw new UserInputError("errors",{errors});
            }
           
            const user = await User.findOne({ username });
            if(user){
                throw new UserInputError("username is already in use",
                {errors:{
                    username:"this username is taken"
                    }
                })
            }
            password = await bcrypt.hash(password,12);
            const newUser = new User({
                username,
                password,
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();

            const token = generateToken(res)

            return {
                ...res._doc,
                 id: res._id,
                 token
            }

        } 
     }
};