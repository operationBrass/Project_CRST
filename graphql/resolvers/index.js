const noteResolvers = require('./notes');
const userResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
    Query: {
        ...noteResolvers.Query // spread operator
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...noteResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
}