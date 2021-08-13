const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose  = require('mongoose');

const {MONGODB} = require('./config');

const typeDefs = gql`
type Query{
    sayHi: String! #! means its required field
} `

const resolvers = {
    Query:{
        sayHi: () => 'Hello Mate'
    }
}


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
