//dependency imports 
const {ApolloServer} = require('apollo-server');
const mongoose  = require('mongoose');

//relative imports
const Note = require ('./models/Note');
const {MONGODB} = require('./config'); // destructing.. is a file and not a dependency..
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/')

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req}) 
    /* we take the request from express
    we pass it into the context so we can access the request body*/
});

mongoose.connect(MONGODB,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => {
        console.log("mongoDB connected")
        return server.listen({port: PORT});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })
    .catch(err => {
        console.log(err);
    })

