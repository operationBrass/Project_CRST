const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require("../config");
const {AuthenticationError} = require("apollo-server");

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split("bearer ")[1];
        if(token){
            try{
                console.log(token)
                const user = jwt.verify(token,SECRET_KEY);
                return user;
            }catch(err){
                throw new AuthenticationError("Expired Token")
            }
        }
    }
}