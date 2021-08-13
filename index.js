//dependency imports 
const {ApolloServer} = require('apollo-server');
const mongoose  = require('mongoose');

//relative imports
const Note = require ('./models/Note');

const {MONGODB} = require('./config'); // destructing.. is a file and not a dependency..
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
        console.log("mongoDB connected")
        return server.listen({port: 5000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });

