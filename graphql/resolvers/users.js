const User = require('../../models/User');

module.exports - {
    Mutation: {
        register(parent,args,context,info){//parent is likely undefined..
            //TODO: validation user data
            //TODO: make sure user doesnt already exist
            //TODO: Hash password before we store
            //TODO: auth token JWA.
        } 
    }
}