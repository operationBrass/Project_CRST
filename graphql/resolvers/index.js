const noteResolvers = require('./notes');
const userResolves = require('./users');

module.exports = {
    Query: {
        ...noteResolvers.Query // spread operator
    }
}