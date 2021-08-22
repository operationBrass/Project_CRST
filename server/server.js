const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PORT = process.env.PORT || 3000;
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const db = require("./config/connection");


async function startApolloServer() {
    // Construct a schema, using GraphQL schema language
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
          console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
      });
      

}

startApolloServer();

