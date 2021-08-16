const notesResolvers = require('./notes');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
    Query: {
        ...notesResolvers.Query // spread operator
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...notesResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
}