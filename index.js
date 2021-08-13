//dependency imports 
const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose  = require('mongoose');

//relative imports
const Note = require ('./models/Note');

const {MONGODB} = require('./config'); // destructing.. is a file and not a dependency..


const typeDefs = gql`
    type Note{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
type Query{
   getNotes: [Note]
}
`;

const resolvers = {
    Query:{
        async getNotes(){
            try
            {
                const notes = await Note.find();
                return notes;
            }catch(err){
                throw new Error(err);
            }
        }
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

