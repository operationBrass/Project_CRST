//template code provided in apollo docs. 
//https://www.apollographql.com/docs/apollo-server/integrations/middleware/

import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

//what operations i support? 
const typeDefs = gql`
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hi"
    }
};

async function startApolloServer(typeDefs, resolvers) {

  // Same ApolloServer initialization as before
  const server = new ApolloServer({ typeDefs, resolvers });

  // Required logic for integrating with Express
  await server.start();
  const app = express();
  server.applyMiddleware({
     app,

     // By default, apollo-server hosts its GraphQL endpoint at the
     // server root. However, *other* Apollo Server packages host it at
     // /graphql. Optionally provide this to match apollo-server.
     path: '/'
  });

  // Modified server startup
  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs,resolvers);