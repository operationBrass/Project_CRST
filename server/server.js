const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PORT = process.env.PORT || 3000; 

// The GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: function() { return 'world' }
  }
};

async function startApolloServer() {
    // Construct a schema, using GraphQL schema language
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    await new Promise(resolve => app.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    return { server, app };

}

startApolloServer();

