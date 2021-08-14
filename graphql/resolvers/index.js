const noteResolvers = require('./notes');
const userResolvers = require('./users');

module.exports = {
    Query: {
        ...noteResolvers.Query // spread operator
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...noteResolvers.Mutation
    }
}